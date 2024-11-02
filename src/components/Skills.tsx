import React from 'react';
import '../style/skills.css';

const Skills = () => {
  const skills = [
    { name: 'HTML', level: 'Expert' },
    { name: 'CSS', level: 'Expert' },
    { name: 'JavaScript', level: 'Intermediate' },
    { name: 'React', level: 'Intermediate' },
    { name: 'Responsive Design', level: 'Expert' },
    { name: 'Git & GitHub', level: 'Intermediate' },
  ];

  return (
    <div className="skills-container" id='Skills'>
      <h2 className="skills-title">My Skills</h2>
      <div className="skills-list">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            <h3 className="skill-name">{skill.name}</h3>
            <p className="skill-level">{skill.level}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
