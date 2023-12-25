import React from "react"

import { Progress } from "@/components/ui/progress"

export default function SkillRow({
  data: { level, name },
}: {
  data: SkillRowData
}) {
  const [levelPercent, setLevelPercent] = React.useState(0)

  const isRefused = level === "Refuse"
  const levelPercentMax = Math.max(
    25,
    ["Débutant", "Avancé", "Expert"].indexOf(level) * 50
  )

  // animate the progress bar, use easing
  React.useEffect(() => {
    setLevelPercent(levelPercentMax)
  }, [levelPercentMax])

  return (
    <div className="self-center">
      <span className={isRefused ? "text-[red] line-through" : ""}>{name}</span>
      {!isRefused && <Progress value={levelPercent} />}
    </div>
  )
}
