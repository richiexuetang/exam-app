import type { NextApiRequest, NextApiResponse } from "next"
import { getAllExams } from "lib/api/exam"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      const result = await getAllExams()
      return res.status(200).json(result)
    } catch (e: any) {
      console.log(e)
      return res.status(500).json({
        error: e.toString(),
      })
    }
  } else {
    return res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}
