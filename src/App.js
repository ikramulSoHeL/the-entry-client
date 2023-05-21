import React from "react";
import { Outlet, Routes, Route } from "react-router-dom";

import {
  HomePage,
  AllEventsPage,
  EventDetailsPage,
  LoginPage,
  RegisterPage,
} from "./pages";
import Navbar from "./components/navbar/Navbar";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/all-events" element={<AllEventsPage />} />
        <Route path="/event-details" element={<EventDetailsPage />} />

        <Route path="/auth" element={<Outlet />}>
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
