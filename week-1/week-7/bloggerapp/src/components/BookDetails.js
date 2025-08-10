import React from "react";

export default function BookDetails() {
  const books = [
    { id: 1, title: "React Up and Running", author: "Stoyan" },
    { id: 2, title: "Learning React", author: "Alex" }
  ];
  return (
    <div>
      <h3>Book Details</h3>
      <ul>
        {books.map(b => <li key={b.id}>{b.title} — {b.author}</li>)}
      </ul>
    </div>
  );
}
