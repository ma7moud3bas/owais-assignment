import { NextApiRequest, NextApiResponse } from "next"
import { CustodianApplication } from "../../types"
import path from "path"
import fs from 'fs'

type FindResponse = {
    success: true
    data: {
        application: CustodianApplication,
    },
} | {
    success: false
    error: string
}

export const applicationsFindHandler = (
    req: NextApiRequest,
    res: NextApiResponse<FindResponse>
) => {

    const filePath = path.join(process.cwd(), 'src', 'lib', 'db', 'applications.json');
    const { applicationId: id } = req.query;

    try {
        const fileContents = fs.readFileSync(filePath, 'utf8');
        const data = JSON.parse(fileContents);
        const application = data.applications.find((app: CustodianApplication) => app.id === id);

        if (!application) {
            throw new Error("Record not found");
        }

        res.status(200).json({
            success: true,
            data: {
                application,
            }
        })

    } catch (error: any) {
        console.error(error.message)
        res.status(500).json({
            success: false,
            error: error.message || 'Error reading applications data',
        });
    }
}
