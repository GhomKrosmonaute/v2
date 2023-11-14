import React from "react";

import { Avatar, AvatarImage, AvatarFallback } from "~/components/ui/avatar";

export default function App() {
  return (
    <div>
      <Avatar>
        <AvatarImage src="/static/profile-picture.png" alt="@GhomKrosmonaute" />
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>
    </div>
  );
}
