import React from "react";
import { Outlet, Routes, Route, useLocation } from "react-router-dom";

import {
  HomePage,
  AllEventsPage,
  EventDetailsPage,
  TicketDetailsPage,
  ProfilePage,
  LoginPage,
  RegisterPage,
} from "./pages";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

const App = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === "/auth/login";
  const isRegisterPage = location.pathname === "/auth/register";

  return (
    <div className="app">
      {!isLoginPage && !isRegisterPage && <Navbar />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/all-events" element={<AllEventsPage />} />
        <Route path="/event-details/:id" element={<EventDetailsPage />} />
        <Route path="/ticket-details/:id" element={<TicketDetailsPage />} />
        <Route path="/profile/:id" element={<ProfilePage />} />

        <Route path="/auth" element={<Outlet />}>
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
        </Route>

        <Route path="*" element={<h1>404</h1>} />
      </Routes>
      {!isLoginPage && !isRegisterPage && <Footer />}
    </div>
  );
};

export default App;
