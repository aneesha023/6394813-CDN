import React, { useState } from "react";
import GuestPage from "./components/GuestPage";
import UserPage from "./components/UserPage";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => setIsLoggedIn(false);

  return (
    <div style={{ padding: 20 }}>
      <h1>Ticket Booking App</h1>

      {/* Conditional rendering */}
      {!isLoggedIn ? (
        <GuestPage onLogin={handleLogin} />
      ) : (
        <UserPage onLogout={handleLogout} />
      )}
    </div>
  );
}

export default App;
