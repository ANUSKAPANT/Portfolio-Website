import React from 'react';
import SectionHeaderComponent from '../sectionheader/sectionheader.component';
import './skills.component.scss';

const Skills = () => {
  return (
    <>
      <SectionHeaderComponent sectionName={'Skills'}/>
      <div id="skills" className="skills row">
        <img alt="C++" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" />
        <img alt="C#" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg" />
        <img alt=".Net" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg" />
        <img alt="rails"src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rails/rails-plain-wordmark.svg" />
        <img alt="js" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg" />
        <img alt="Angular" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-plain-wordmark.svg" />
        <img alt="React" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg" />
        <img alt= "HTML" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-plain-wordmark.svg" />
        <img alt="CSS" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-plain-wordmark.svg" />
        <img alt="SQl" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg" />
        <img alt="heroku" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/heroku/heroku-original-wordmark.svg" />
        <img alt="aws" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" />  
      </div>
    </>
  )
}

export default Skills;