import type { NextApiRequest, NextApiResponse } from 'next'
import { applicationsUpdateHandler } from '@/lib/apiHandlers/applications/update'
import { applicationsFindHandler } from '@/lib/apiHandlers/applications/find'
import { applicationsDeleteHandler } from '@/lib/apiHandlers/applications/delete'

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    if (req.method === 'PUT') {
        applicationsUpdateHandler(req, res)
    } else if (req.method === 'GET') {
        applicationsFindHandler(req, res)
    } else if (req.method === 'DELETE') {
        applicationsDeleteHandler(req, res)
    }
}
