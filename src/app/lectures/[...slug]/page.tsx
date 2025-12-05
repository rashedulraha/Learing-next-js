import { notFound } from "next/navigation";
import React from "react";

const Lecture = ({ params }: { params: { slug: string[] } }) => {
  const { slug } = params;

  const lectureNumber = Number(slug[0]);

  if (lectureNumber > 20) {
    notFound();
  }

  return (
    <div>
      <h1>Lecture part {lectureNumber}</h1>
    </div>
  );
};

export default Lecture;
