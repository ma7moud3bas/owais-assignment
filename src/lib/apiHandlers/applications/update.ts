import { NextApiRequest, NextApiResponse } from "next"
import { CustodianApplication } from "../../types"
import path from "path"
import fs from 'fs'

type UpdateResponse = {
    success: true
    data: {
        application: CustodianApplication,
    },
} | {
    success: false
    error: string
}

export const applicationsUpdateHandler = (
    req: NextApiRequest, res: NextApiResponse<UpdateResponse>
) => {

    const filePath = path.join(process.cwd(), 'src', 'lib', 'db', 'applications.json');
    try {
        const fileContents = fs.readFileSync(filePath, 'utf8');
        const data = JSON.parse(fileContents);
        const { applicationId: id } = req.query;
        const { application } = req.body;

        const index = data.applications.findIndex((app: CustodianApplication) => app.id === id);

        if (index === -1) {
            throw new Error("Record not found");
        }
        const oldApplication = data.applications[index];

        const newApplication: CustodianApplication = {
            ...oldApplication,
            ...application,
        }

        data.applications.push(newApplication);
        fs.writeFileSync(filePath, JSON.stringify(data));

        res.status(200).json({
            success: true,
            data: {
                application: newApplication
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