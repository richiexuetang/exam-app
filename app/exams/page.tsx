import Link from "next/link"

import { getAllExams } from "@/lib/api/exam"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default async function ExamsPage() {
  const exams = await getAllExams()

  if (!exams) {
    return null
  }
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          Practice Exams
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          Prepare the AWS Certified Cloud Practitioner CLF-C02. 390 unique
          high-quality test questions with detailed explanations!
        </p>
      </div>
      <div className="flex gap-4">
        {exams.map((exam) => (
          <Link href={`/exams/${exam._id}`} key={exam._id}>
            <Card>
              <CardHeader>
                <CardTitle>Exam #{exam._id}</CardTitle>
                <CardDescription>
                  Practice exam that consists of sample questions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>Status:</p>
              </CardContent>
              <CardFooter>
                <p>?/50</p>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  )
}
