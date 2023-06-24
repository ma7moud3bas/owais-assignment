import type { NextApiRequest, NextApiResponse } from 'next'
import { applicationsPostHandler } from '@/lib/apiHandlers/applications/post'
import { applicationsGetHandler } from '@/lib/apiHandlers/applications/get'


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method === 'POST') {
    applicationsPostHandler(req, res)
  } else if (req.method === 'GET') {
    applicationsGetHandler(req, res)
  }
}
