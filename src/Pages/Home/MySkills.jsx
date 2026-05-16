import data from '../../data/index.json';
import SkillsModel from '../../Components/SkillsModel.jsx';
import {useEffect, useState} from "react";

export default function MySkills() {
    const [showModel, setShowModel] = useState(false);
    const [selectedSkill, setSelectedSkill] = useState(null);

    return (
        <section className="skills-section" id="mySkills">
            <div className="skills-contianer">
                <h3 className="skills-section-title">Expertise</h3>
                <h2 className="skills-section-heading">My <span className="skills-section-sub-color">Skills</span></h2>
            </div>
            <div className="skills-section-container">
                {data?.skills?.map((item, index) => (
                    <div className="skills-section-card" key={index} onClick={() => {
                        setSelectedSkill(item);
                        setShowModel(true);
                    }}>
                        <div className="skills-section-img">
                            <img src={item.src} alt="Skill Img" />
                        </div>
                        <div className="skills-section-card-contnet">
                            <h3 className="skills-section-card-title">{item.title}</h3>
                            <p className="skills-section-card-description">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
            {showModel && <SkillsModel
                skill={selectedSkill}
                onClose={() => {
                    setShowModel(false);
                    setSelectedSkill(null);
                }}
            />}
        </section>
    )
}