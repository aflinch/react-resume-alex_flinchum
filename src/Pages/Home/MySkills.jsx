import data from '../../data/index.json';

export default function MySkills() {
    return (
        <section className="skills-section" id="mySkills">
            <div className="skills-contianer">
                <h3 className="skills-section-title">Expertise</h3>
                <h2 className="skills-section-heading">My <span className="skills-section-sub-color">Skills</span></h2>
            </div>
            <button className="skills-section-container">
                {data?.skills?.map((item, index) => (
                    <div className="skills-section-card" key={index}>
                        <div className="skills-section-img">
                            <img src={item.src} alt="Skill Img" />
                        </div>
                        <div className="skills-section-card-contnet">
                            <h3 className="skills-section-card-title">{item.title}</h3>
                            <p className="skills-section-card-description">{item.description}</p>
                        </div>
                    </div>
                ))}
            </button>
        </section>
    )
}