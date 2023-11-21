import React from "react"

import {
  Avatar as AvatarUI,
  AvatarImage,
  AvatarFallback,
} from "@/components/ui/avatar"

import pp from "@assets/images/profile-picture.png"

export default function Avatar() {
  return (
    <AvatarUI>
      <AvatarImage src={pp} alt="@GhomKrosmonaute" />
      <AvatarFallback>Ghom</AvatarFallback>
    </AvatarUI>
  )
}
