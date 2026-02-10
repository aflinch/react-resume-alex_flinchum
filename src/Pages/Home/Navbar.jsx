import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Navbar() {
    const [navActive, setNavActive] = useState(false);

    const toggleNav = () => {
        setNavActive(!navActive);
    };

    const closeMenu = () => {
        setNavActive(false);
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 500) {
                closeMenu();
            }
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    useEffect(() => {
        if(window.innerWidth <= 1200) {
            closeMenu();
        }
    }, []);

    return (
        <nav className={`navbar ${navActive ? "active" : ""}`}>
            <div>
                <img src="./img/logo.png" alt="Logo" />
            </div>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a className={`nav_hamburger ${navActive ? "active" : ""}`} onClick={toggleNav}>
                <span className="nav_hameburger_line"></span>
                <span className="nav_hameburger_line"></span>
                <span className="nav_hameburger_line"></span>
            </a>
            <div className={`navbar-items ${navActive ? "active" : ""}`}>
                <ul>
                    <li>
                        <Link
                            onClick={closeMenu}
                            activeClass="navbar-active-content"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            to="heroSection"
                            className="navbar-content">
                            Home
                        </Link>
                        <Link
                            onClick={closeMenu}
                            activeClass="navbar-active-content"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            to="MyResume"
                            className="navbar-content">
                            Resume
                        </Link>
                        <Link
                            onClick={closeMenu}
                            activeClass="navbar-active-content"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            to="AboutMe"
                            className="navbar-content">
                            About Me
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;