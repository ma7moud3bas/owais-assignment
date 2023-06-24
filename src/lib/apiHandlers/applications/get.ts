import { NextApiRequest, NextApiResponse } from "next"
import { CustodianApplication } from "../../types"
import path from "path"
import fs from 'fs'

type GetResponse = {
    success: true
    data: {
        applications: CustodianApplication[],
    },
} | {
    success: false
    error: string
}

type GetRequestParams = {
    status?: "approved" | "pending"
}

export const applicationsGetHandler = (
    req: NextApiRequest,
    res: NextApiResponse<GetResponse>
) => {
    const params: GetRequestParams = req.query
    const { status } = params;

    const filePath = path.join(process.cwd(), 'src', 'lib', 'db', 'applications.json');
    try {
        const fileContents = fs.readFileSync(filePath, 'utf8');
        const data = JSON.parse(fileContents);

        if (!status) {
            return res.status(200).json({
                success: true,
                data: {
                    applications: data.applications,
                }
            });
        }
        if (status === "approved") {
            const filteredData = data.applications.filter((app: CustodianApplication) => app.status === "approved");
            return res.status(200).json({
                success: true,
                data: {
                    applications: filteredData,
                }
            });
        } else if (status === "pending") {
            const filteredData = data.applications.filter((app: CustodianApplication) => app.status !== "approved");
            return res.status(200).json({
                success: true,
                data: {
                    applications: filteredData,
                }
            });
        } else {
            throw new Error("Invalid status");
        }
    } catch (error: any) {
        console.error(error.message)
        res.status(500).json({
            success: false,
            error: error.message || 'Error reading applications data',
        });
    }
}
