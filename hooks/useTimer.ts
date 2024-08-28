import { useCallback, useState } from "react"

import useInterval from "./useInterval"
import { Time, Validate } from "./utils"

const DEFAULT_DELAY = 1000
function getDelayFromExpiryTimestamp(expiryTimestamp: any) {
  if (!Validate.expiryTimestamp(expiryTimestamp)) {
    return null
  }

  const seconds = Time.getSecondsFromExpiry(expiryTimestamp)
  const extraMilliSeconds = Math.floor((seconds - Math.floor(seconds)) * 1000)
  return extraMilliSeconds > 0 ? extraMilliSeconds : DEFAULT_DELAY
}

export default function useTimer(
  { expiryTimestamp: expiry, onExpire, autoStart = true } = {} as any
) {
  const [expiryTimestamp, setExpiryTimestamp] = useState(expiry)
  const [seconds, setSeconds] = useState(
    Time.getSecondsFromExpiry(expiryTimestamp)
  )
  const [isRunning, setIsRunning] = useState(autoStart)
  const [didStart, setDidStart] = useState(autoStart)
  const [delay, setDelay] = useState(
    getDelayFromExpiryTimestamp(expiryTimestamp)
  )

  const handleExpire = useCallback(() => {
    Validate.onExpire(onExpire) && onExpire()
    setIsRunning(false)
    setDelay(null)
  }, [onExpire])

  const pause = useCallback(() => {
    setIsRunning(false)
  }, [])

  const restart = useCallback(
    (newExpiryTimestamp: any, newAutoStart = true) => {
      setDelay(getDelayFromExpiryTimestamp(newExpiryTimestamp))
      setDidStart(newAutoStart)
      setIsRunning(newAutoStart)
      setExpiryTimestamp(newExpiryTimestamp)
      setSeconds(Time.getSecondsFromExpiry(newExpiryTimestamp))
    },
    []
  )

  const resume = useCallback(() => {
    const time = new Date()
    time.setMilliseconds(time.getMilliseconds() + seconds * 1000)
    restart(time)
  }, [seconds, restart])

  const start = useCallback(() => {
    if (didStart) {
      setSeconds(Time.getSecondsFromExpiry(expiryTimestamp))
      setIsRunning(true)
    } else {
      resume()
    }
  }, [expiryTimestamp, didStart, resume])

  useInterval(
    () => {
      if (delay !== DEFAULT_DELAY) {
        setDelay(DEFAULT_DELAY)
      }
      const secondsValue = Time.getSecondsFromExpiry(expiryTimestamp)
      setSeconds(secondsValue)
      if (secondsValue <= 0) {
        handleExpire()
      }
    },
    isRunning ? delay : null
  )

  return {
    ...Time.getTimeFromSeconds(seconds),
    start,
    pause,
    resume,
    restart,
    isRunning,
  }
}
