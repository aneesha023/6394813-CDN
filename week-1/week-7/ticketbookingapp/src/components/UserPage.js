import React from "react";

export default function UserPage({ onLogout }) {
  return (
    <div>
      <h2>Welcome User</h2>
      <p>You can now book tickets.</p>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
}
