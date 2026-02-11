import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

export default function AboutMe() {
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
        <section id="heroSection" className="hero-section">
            <div className="hero-section-content-box">
                <div className="hero-section-content">
                    <h3 className="hero-section-name">Hello, I'm Alex Flinchum</h3>
                </div>
            </div>
        </section>
    )
}