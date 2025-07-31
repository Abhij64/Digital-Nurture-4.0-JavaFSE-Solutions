import React, { useState } from "react";
import GuestPage from "./components/GuestPage";
import UserPage from "./components/UserPage";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";

function SomeComponent({ shouldRender }) {
  if (!shouldRender) {
    return null;
  }

  return <div>This will render only if shouldRender is true.</div>;
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  let page;
  if (isLoggedIn) {
    page = <UserPage />;
  } else {
    page = <GuestPage />;
  }

  return (
    <div>
      <h1>Flight Booking System</h1>
      <SomeComponent shouldRender={false} />
      {isLoggedIn ? (
        <LogoutButton onClick={() => setIsLoggedIn(false)} />
      ) : (
        <LoginButton onClick={() => setIsLoggedIn(true)} />
      )}
      {page}
    </div>
  );
}

export default App;
