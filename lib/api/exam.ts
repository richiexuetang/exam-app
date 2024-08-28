import clientPromise from "@/lib/mongodb"

export interface ExamProps {}

export interface ResultProps {
  _id: string
  users: ExamProps[]
}

export async function getAllExams(): Promise<ResultProps[]> {
  const client = await clientPromise
  const collection = client.db("aws-practice-exam").collection("exam")
  return await collection
    .aggregate<ResultProps>([
      {
        //sort by follower count
        $sort: {
          examId: -1,
        },
      },
      {
        $limit: 100,
      },
      {
        $group: {
          _id: {
            $toLower: { $substrCP: ["$examId", 0, 1] },
          },
          exams: {
            $push: {
              examId: "$examId",
            },
          },
          count: { $sum: 1 },
        },
      },
      {
        //sort alphabetically
        $sort: {
          _id: 1,
        },
      },
    ])
    .toArray()
}
