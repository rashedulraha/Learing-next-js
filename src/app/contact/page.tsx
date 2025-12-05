import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Contact",
  description: "contact description",
};

const page = () => {
  return (
    <div>
      <h1>Hello contact</h1>
    </div>
  );
};

export default page;
