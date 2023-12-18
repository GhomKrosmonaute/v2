import React from "react"

import OpenInNewTab from "@/app/OpenInNewTab"

export default function ProfessionalProjectRow({
  data,
  _key,
}: {
  data: ProfessionalProjectRowData
  _key: number
}) {
  return (
    <div className="my-3">
      <div className="flex justify-between items-center">
        <h3>{data.name}</h3>
        <OpenInNewTab href={data.url} />
      </div>
      <div
        className={
          "flex flex-col-reverse gap-4 " +
          (_key % 2 !== 0 ? "md:flex-row-reverse" : "md:flex-row")
        }
      >
        <div>
          {data.description.map((paragraph, i) => (
            <p key={i} className="my-3 text-justify">
              {paragraph}
            </p>
          ))}
        </div>
        <img
          src={`/professional-projects/${data.image}`}
          alt={data.image}
          className="object-cover w-full md:max-w-[min(50vw,50%)]"
        />
      </div>
    </div>
  )
}
