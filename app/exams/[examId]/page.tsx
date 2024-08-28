export default function ExamPage({ params }: { params: { examId: string } }) {
  return <div>My Exam: {params.examId}</div>
}
