import { Digit } from "./Digit"

interface TimerProps {
  seconds: number
  minutes: number
  hours: number
}

export const Timer = ({ seconds, minutes, hours }: TimerProps) => {
  return (
    <div>
      <Digit value={hours} title="HOURS" />
      <span>
        <span />
        <span />
      </span>
      <Digit value={minutes} title="MINUTES" />
      <span>
        <span className="my-1 inline-block h-2 w-2" />
        <span className="my-1 inline-block h-2 w-2" />
      </span>
      <Digit value={seconds} title="SECONDS" />
    </div>
  )
}
