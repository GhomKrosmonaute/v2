import React from "react"

export default function Stars({ count = 0 }) {
  return <div className="px-3 whitespace-nowrap">⭐ {count}</div>
}
