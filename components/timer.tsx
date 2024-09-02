"use client"

import { useTimer } from "react-timer-hook"

interface TimerProps {
  expiryTimestamp: Date
}

export const Timer = ({ expiryTimestamp }: TimerProps) => {
  const { seconds, minutes, hours, start, pause, resume } = useTimer({
    expiryTimestamp,
    onExpire: () => console.warn("onExpire called"),
  })

  return (
    <div className="my-2 flex flex-col items-center">
      <div className="text-lg">
        <span>
          {hours < 10 && "0"}
          {hours}
        </span>
        :
        <span>
          {minutes < 10 && "0"}
          {minutes}
        </span>
        :<span>{seconds}</span>
      </div>
      <div className="flex gap-2">
        <button onClick={pause}>Pause</button>
        <button onClick={resume}>Resume</button>
      </div>
    </div>
  )
}
