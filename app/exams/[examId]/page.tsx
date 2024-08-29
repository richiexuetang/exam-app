"use client"

import { useTimer } from "react-timer-hook"

export default function ExamPage({ params }: { params: { examId: string } }) {
  const time = new Date()
  time.setSeconds(time.getSeconds() + 60 * 90) // 10 minutes timer
  const { seconds, minutes, hours, days, start, pause, resume, restart } =
    useTimer({
      expiryTimestamp: time,
      onExpire: () => console.warn("onExpire called"),
    })

  return (
    <div>
      Practice Exam: {params.examId}
      <div className="text-lg">
        <span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
      </div>
      <button onClick={start}>Start</button>
      <button onClick={pause}>Pause</button>
      <button onClick={resume}>Resume</button>
    </div>
  )
}
