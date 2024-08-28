import { useEffect, useRef } from "react"

export default function useInterval(callback: any, delay: any) {
  const callbackRef = useRef<any>()

  // update callback function with current render callback that has access to latest props and state
  useEffect(() => {
    callbackRef.current = callback
  })

  useEffect(() => {
    if (!delay) {
      return () => {}
    }

    const interval = setInterval(() => {
      callbackRef.current && callbackRef.current()
    }, delay)
    return () => clearInterval(interval)
  }, [delay])
}
