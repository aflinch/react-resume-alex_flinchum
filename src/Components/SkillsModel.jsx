import React from 'react';
import data from "../data/index.json";

function SkillsModel() {
    return (
       <div>
           {data?.skills?.map((item, index) => (
               <div className="skills-section-card" key={index}>
                   <div className="skills-section-card-contnet">
                       <h3 className="skills-section-card-title">{item.title}</h3>
                       <p className="skills-section-card-description">{item.description}</p>
                   </div>
               </div>
           ))}
       </div>
    )
}

export default SkillsModel;