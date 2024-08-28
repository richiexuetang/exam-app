"use client"

import useTimer from "@/hooks/useTimer"
import { Timer } from "@/components/timer/Timer"

export default function ExamPage({ params }: { params: { examId: string } }) {
  return <div>My Exam: {params.examId}</div>
}
