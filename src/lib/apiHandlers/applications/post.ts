import { NextApiRequest, NextApiResponse } from "next"
import { CustodianApplication } from "../../types"
import path from "path"
import fs from 'fs'
import { randomUUID } from "crypto"

type PostResponse = {
    success: true
    data: {
        application: CustodianApplication,
    },
} | {
    success: false
    error: string
}

export const applicationsPostHandler = (
    req: NextApiRequest, res: NextApiResponse<PostResponse>
) => {

    const filePath = path.join(process.cwd(), 'src', 'lib', 'db', 'applications.json');
    try {
        const fileContents = fs.readFileSync(filePath, 'utf8');
        const data = JSON.parse(fileContents);
        const { application } = req.body;

        const newApplication: CustodianApplication = {
            id: randomUUID(),
            ...application,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
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
            error: error.message || 'Error reading applications data',
        });
    }
}