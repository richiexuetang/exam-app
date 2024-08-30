import { getExam } from "@/lib/api/exam"
import { QuestionForm } from "@/components/form/question-form"
import { Timer } from "@/components/timer"

export default async function ExamPage({
  params,
}: {
  params: { examId: string }
}) {
  const time = new Date()
  time.setSeconds(time.getSeconds() + 60 * 90) // 90 minutes timer

  const exam = await getExam(params.examId)

  return (
    <div className="m-5 flex flex-col items-center">
      Practice Exam: {params.examId}
      <Timer expiryTimestamp={time} />
      <div className="my-5">
        {exam?.questions && <QuestionForm questions={exam?.questions} />}
      </div>
    </div>
  )
}
