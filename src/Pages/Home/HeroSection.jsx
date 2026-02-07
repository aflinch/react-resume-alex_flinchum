export default function HeroSection() {
    return (
        <section id="heroSection" className="hero-section">
            <div className="hero-section-content-box">
                <div className="hero-section-content">
                    <h3 className="hero-section-title">Hello, I'm Alex Flinchum</h3>
                    <h1 className="hero-section-title">
                        <span className="hero-section-title-color">Full-Stack </span>
                        <span className="hero-section-title-sub-color">Developer</span>
                    </h1>
                    <p className="hero-section-description">
                        Full-stack developer with 6+ years building, testing, and delivering production software.
                        <br /> I hold a Master’s degree in Software Development from Boston University
                        and an undergraduate degree in Informatics from Indiana University, providing a strong foundation
                        in software engineering, systems thinking, and applied computing.
                    </p>
                </div>
                <span className="hero-section-buttons">
                    <button className="blur btn btn-primary">Get In Touch</button>
                    <button className="blur btn btn-primary">Download CV</button>
                </span>
            </div>
            <div className="hero-section-imgx">
                <img src="./img/hero_img.png" alt="Hero Section Img"/>
            </div>
        </section>
    )
}