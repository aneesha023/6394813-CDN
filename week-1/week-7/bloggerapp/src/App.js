import React, { useState } from "react";
import BookDetails from "./components/BookDetails";
import BlogDetails from "./components/BlogDetails";
import CourseDetails from "./components/CourseDetails";

function App() {
  // use this flag to switch which components you want to render or to demo different conditional styles
  const [mode, setMode] = useState("all"); // options: all, books, blogs, courses

  return (
    <div style={{ padding: 20 }}>
      <h1>Blogger App</h1>

      <div style={{ marginBottom: 12 }}>
        <button onClick={() => setMode("all")}>All</button>
        <button onClick={() => setMode("books")} style={{ marginLeft: 8 }}>Books</button>
        <button onClick={() => setMode("blogs")} style={{ marginLeft: 8 }}>Blogs</button>
        <button onClick={() => setMode("courses")} style={{ marginLeft: 8 }}>Courses</button>
      </div>

      {/* Conditional rendering: element variables */}
      {mode === "all" && (
        <>
          <BookDetails />
          <BlogDetails />
          <CourseDetails />
        </>
      )}

      {/* Conditional rendering: ternary */}
      {mode === "books" ? <BookDetails /> : null}
      {mode === "blogs" ? <BlogDetails /> : null}
      {mode === "courses" ? <CourseDetails /> : null}
    </div>
  );
}

export default App;
