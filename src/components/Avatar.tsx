import React from "react";

import {
  Avatar as AvatarUI,
  AvatarImage,
  AvatarFallback,
} from "~/components/ui/avatar";

export default function Avatar() {
  return (
    <div>
      <AvatarUI>
        <AvatarImage src="/static/profile-picture.png" alt="@GhomKrosmonaute" />
        <AvatarFallback>Ghom</AvatarFallback>
      </AvatarUI>
    </div>
  );
}
