import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import DarkModeToggle from "./DarkModeToggle";
import "../App.css";
import { FaBars } from "react-icons/fa";
import { SlClose } from "react-icons/sl";
import { ThemeContext } from "../context/ThemeContext";

const Header = () => {
  const { toggle, mode } = useContext(ThemeContext);
  const [scrolling, setScrolling] = useState(false);

  const { setUserInfo, userInfo } = useContext(UserContext);
  const [isResponsive, setIsResponsive] = useState(false);
  const handleToggle = () => {
    setIsResponsive(!isResponsive);
  };

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 0) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  const headerClass = `topnav ${isResponsive ? "responsive" : ""} ${
    scrolling ? "scrolled" : ""
  } ${mode === "light" ? "light" : "dark"}`;


  const handleCloseNavbar = () => {
    setIsResponsive(false); // Navbar'ı kapatmak için state'i false yap
  };
  useEffect(() => {
    fetch("http://localhost:4000/profile", {
      credentials: "include",
    }).then((response) => {
      response.json().then((userInfo) => {
        setUserInfo(userInfo);
      });
    });

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
    
  }, []);

  const username = userInfo?.username;

  const logout = () => {
    fetch("http://localhost:4000/logout", {
      credentials: "include",
      method: "POST",
    });
    setUserInfo(null);
  };
  return (
    <header
    className={headerClass}
      id="myTopnav"
    >
      <div className="leftInfo">
      {!isResponsive && <DarkModeToggle />}
        <Link to="/" className="logo active" onClick={handleCloseNavbar}>
          Kenta
        </Link>
      </div>

      <nav>
        <Link to="/portfolio" className="a_items" onClick={handleCloseNavbar}>
          Çalışmalar
        </Link>
        <Link to="/blog" className="a_items" onClick={handleCloseNavbar}>
          Blog
        </Link>
        <Link to="/ask" className="a_items" onClick={handleCloseNavbar}>
          Plancılara Sor
        </Link>
        <Link to="/contact" className="a_items" onClick={handleCloseNavbar}>
          İletişim
        </Link>
        <Link to="/about" className="a_items" onClick={handleCloseNavbar}>
          Hakkımızda
        </Link>

        {username && (
          <>
            <Link to="/create" className="a_items" onClick={handleCloseNavbar}>
              Yeni Blog Yaz
            </Link>
            <a id="logoutbtn" onClick={logout}>
              Çıkış Yap
            </a>
          </>
        )}
        {!username && (
          <div className="bottom-links">
            {" "}
            {/* Container for links to be moved under each other */}
            <Link to="/login" className="a_items" onClick={handleCloseNavbar}>
              Giriş Yap
            </Link>
            <Link
              to="/register"
              className="a_items"
              onClick={handleCloseNavbar}
            >
              Üye Ol
            </Link>
          </div>
        )}
      </nav>

      <Link to={"#"} className="icon" onClick={handleToggle}>
        {!isResponsive ? <FaBars /> : <SlClose className="closeIcon" />}
      </Link>
    </header>
  );
};

export default Header;
