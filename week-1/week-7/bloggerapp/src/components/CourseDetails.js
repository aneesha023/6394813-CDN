import React from "react";

export default function CourseDetails() {
  const courses = [
    { id: "c1", name: "Full Stack Java" },
    { id: "c2", name: "React Advanced" }
  ];
  return (
    <div>
      <h3>Course Details</h3>
      <ul>
        {courses.map(c => <li key={c.id}>{c.name}</li>)}
      </ul>
    </div>
  );
}
