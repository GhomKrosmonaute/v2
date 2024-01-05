import React from "react"

export default function List({
  children,
}: {
  children: React.ReactElement<HTMLLIElement>[]
}) {
  return <ul className="list">{children}</ul>
}
