import React from "react"

export default function Delay({
  showElement,
  duration,
}: {
  showElement: React.ReactNode
  duration: number
}) {
  const [show, setShow] = React.useState(false)

  React.useEffect(() => {
    const timeout = setTimeout(() => setShow(true), duration)
    return () => clearTimeout(timeout)
  }, [duration])

  if (!show) return <></>

  return <>{showElement}</>
}
