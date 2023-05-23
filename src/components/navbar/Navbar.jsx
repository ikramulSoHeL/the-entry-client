import React, { useEffect, useState } from "react";
import "../../styles/components/index.scss";

import { loadStorage } from "../../utils/persistLocalStorage";
import { logout } from "../../utils/helper";
import { logoutUser } from "../../apis/auth.apis";

import { SlMenu } from "react-icons/sl";
import { VscChromeClose } from "react-icons/vsc";
import { FaUserCircle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";

import ContentWrapper from "../wrappers/Wrapper";

const Navbar = () => {
  const [show, setShow] = useState("top");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenu, setMobileMenu] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  let user = loadStorage("user");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const controlNavbar = () => {
    if (window.scrollY > 200) {
      if (window.scrollY > lastScrollY && !mobileMenu) {
        setShow("hide");
      } else {
        setShow("show");
      }
    } else {
      setShow("top");
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);

  const openMobileMenu = () => {
    setMobileMenu(true);
  };

  const navigationHandler = (type) => {
    if (type === "home") {
      navigate(`/`);
    } else if (type === "events") {
      navigate(`/all-events`);
    } else if (type === "user") {
      navigate("/auth/login");
    } else if (type === "userName") {
      navigate(`/profile/${user._id}`);
    } else if (type === "login") {
      navigate("/auth/login");
    }
    setMobileMenu(false);
  };

  const handleLogout = () => {
    logoutUser({
      refreshToken: loadStorage("refreshToken"),
    })
      .then((res) => {
        navigate("/");
        logout();
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  return (
    <header className={`navbar ${mobileMenu ? "mobileView" : ""} ${show}`}>
      <ContentWrapper>
        <Link to="/" className="logo">
          {/* <img src={logo} alt="logo" /> */}
          <Link to="/" className="homeLogoText">
            The Entry
          </Link>
        </Link>

        <div className="navRightContent">
          <ul className="menuItems">
            <li
              className={
                location.pathname === "/" ? "menuItem active" : "menuItem"
              }
              onClick={() => navigationHandler("home")}
            >
              Home
            </li>
            <li
              className={
                location.pathname === "/all-events"
                  ? "menuItem active"
                  : "menuItem"
              }
              onClick={() => navigationHandler("events")}
            >
              Events
            </li>

            {user ? (
              <li
                className={
                  location.pathname === `/profile/${user._id}`
                    ? "menuItem active"
                    : "menuItem"
                }
                onClick={() => navigationHandler("userName")}
              >
                <FaUserCircle />
                {user.username}
              </li>
            ) : (
              <li
                className={
                  location.pathname === "/profile/:id"
                    ? "menuItem active"
                    : "menuItem"
                }
                onClick={() => navigationHandler("user")}
              >
                <FaUserCircle />
                User
              </li>
            )}

            {user ? (
              <li
                className={
                  location.pathname === "/auth/login"
                    ? "menuItem active"
                    : "menuItem"
                }
                onClick={handleLogout}
              >
                Logout
              </li>
            ) : (
              <li
                className={
                  location.pathname === "/auth/login"
                    ? "menuItem active"
                    : "menuItem"
                }
                onClick={() => navigationHandler("login")}
              >
                Login
              </li>
            )}
          </ul>
        </div>

        <div className="mobileMenuItems">
          {mobileMenu ? (
            <VscChromeClose onClick={() => setMobileMenu(false)} />
          ) : (
            <SlMenu onClick={openMobileMenu} />
          )}
        </div>
      </ContentWrapper>
    </header>
  );
};

export default Navbar;
