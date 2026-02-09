export default function HeroSection() {
    return (
        <section id="heroSection" className="hero-section">
            <div className="hero-section-content-box">
                <div className="hero-section-content">
                    <h3 className="hero-section-name">Hello, I'm Alex Flinchum</h3>
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
                    <button className="btn btn-primary">Get In Touch</button>
                    <button className="btn btn-primary">Download CV</button>
                </span>
                <span className="hero-section-links">
                    <a href=" " className="link" target="_blank" rel="noopener noreferrer">
                        <img src="./img/linkedin_img.png" alt="Linkedin"/>
                    </a>
                    <a href=" " className="link" target="_blank" rel="noopener noreferrer">
                        <img src="./img/github_img.png" alt="Github"/>
                    </a>
                    <a href=" " className="link" target="_blank" rel="noopener noreferrer">
                        <img src="./img/leetcode_img.png" alt="LeetCode"/>
                    </a>
                </span>
            </div>
            <div className="hero-section-img">
                <img src="./img/hero_img.png" alt="Hero Section Img"/>
            </div>
        </section>
    )
}