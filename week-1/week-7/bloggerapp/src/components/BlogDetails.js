import React from "react";

export default function BlogDetails() {
  const blogs = [
    { id: 1, title: "Understanding Hooks" },
    { id: 2, title: "React Patterns" }
  ];
  return (
    <div>
      <h3>Blog Details</h3>
      <ul>
        {blogs.map(blog => <li key={blog.id}>{blog.title}</li>)}
      </ul>
    </div>
  );
}
