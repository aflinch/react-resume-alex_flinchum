import React from 'react';
import { X } from 'lucide-react';

function SkillsModel({ skill, onClose }) {

    return (
       <div>
           <div>
               <button onClick={onClose}><X /></button>
               <div>
                   <h3>{skill.title}</h3>
                   <p>{skill.description}</p>
               </div>
           </div>
       </div>
    )
}

export default SkillsModel;