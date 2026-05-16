//import projects from '../../data/projects.json';
import {useEffect, useState} from "react";

export default function MySkills() {
    const [showModel, setShowModel] = useState(false);
    const [selectedSkill, setSelectedSkill] = useState(null);

    return (
        <section className="projects-section" id="recentProjects">
            <div className="projects-contianer">
                <h2 className="projects-section-heading">Recent <span className="projects-section-sub-color">Projects</span></h2>
                <p className="projects-section-description">
                    Here are some of my most recent projects
                    that highlight my experience in full-stack development and software engineering.
                </p>
            </div>
            <div className="skills-section-container">
            </div>
        </section>
    )
}