import { NextApiRequest, NextApiResponse } from "next"
import { CustodianApplication } from "../../types"
import path from "path"
import fs from 'fs'

type DeleteResponse = {
    success: true
    data: {
        application: CustodianApplication,
    },
} | {
    success: false
    error: string
}

export const applicationsDeleteHandler = (
    req: NextApiRequest, res: NextApiResponse<DeleteResponse>
) => {

    const filePath = path.join(process.cwd(), 'src', 'lib', 'db', 'applications.json');
    try {
        const fileContents = fs.readFileSync(filePath, 'utf8');
        const data = JSON.parse(fileContents);

        const { applicationId: id } = req.query;
        const application = data.applications.find((app: CustodianApplication) => app.id === id);
        if (!application) {
            throw new Error("Record not found");
        }

        const newData = data.applications.filter((app: CustodianApplication) => app.id !== id);

        fs.writeFileSync(filePath, JSON.stringify(newData));

        res.status(200).json({
            success: true,
            data: {
                application
            },
        })

    } catch (error: any) {
        console.error(error.message)
        res.status(500).json({
            success: false,
            error: error.message || 'Error reading Records data',
        });
    }
}