import React from 'react';
import EightfoldLogo from '../assets/logos/eightfold-ai.png';
import OracleLogo from '../assets/logos/oracle.png';
import DynamatixLogo from '../assets/logos/dynamatix.jpeg';
import OjasLogo from '../assets/logos/ojas.jpeg';

function ExperienceCard() {
  const experiences = [
    {
      logo: EightfoldLogo,
      company: 'Eightfold AI',
      duration: "June'26 - Present",
      role: 'SWE - AI Engineering',
      description: 'Building an platform of AI agents for AI Interviews, Data Seeding and Career Coach Agents',
      skills: 'Python, FastAPI, Knowledge Graph, Agent Orchestration'
    },
    {
      logo: OracleLogo,
      company: 'Oracle',
      duration: "August'24 - June'26",
      role: 'Associate Quality Analyst',
      description: 'Responsible for automating feature implementation of the application - Oracle Communications Unified Assurance. Delivered AI Agents for generating test scenarios and automation test scripts in any test framework by just taking JIRA Epic/Zephyr ticket as the input. Involved automating UI functionality and command line functionality from Linux based Virtual Machine.',
      skills: 'Java, Python, Shell scripting, AI Agents, LangGraph, RAG, Selenium, RobotFramework'
    },
    {
      logo: OracleLogo,
      company: 'Oracle',
      duration: "January'24 - July'24",
      role: 'Project Intern',
      description: 'Automated feature implementation of the application - Oracle Communications Unified Assurance. Involved automating UI functionality and command line functionality from the Linux based Virtual Machine.',
      skills: 'Python, Shell scripting, Selenium, RobotFramework'
    },
    {
      logo: DynamatixLogo,
      company: 'Dynamatix Analytics',
      duration: "June'23 - July'23",
      role: 'Software Development Intern',
      description: 'Researched and worked on Dynamatix’s flagship platform - RiskHawk™️, where I developed and enhanced existing features of RiskHawk™️.',
      skills: 'Java, MySQL'
    },
    {
      logo: OjasLogo,
      company: 'Ojas Innovative Technologies',
      duration: "May'22 - June'22",
      role: 'Summer Internship',
      description: 'Trained under subject matter experts of Data Science and Machine Learning, and applied skills acquired in various of the company\'s datasets as projects and Proofs of Concept.',
      skills: null
    }
  ];

  return (
    <div className="flex flex-col">
      {experiences.map((exp, index) => (
        <div key={index} className="flex flex-col md:flex-row gap-8 py-12 border-b-2 border-black first:border-t-2 first:border-black">
          <div className="w-24 h-24 shrink-0 flex items-center justify-center p-2 border-4 border-black">
            <img src={exp.logo} alt={`${exp.company} logo`} className="w-full h-full object-contain grayscale hover:grayscale-0 transition-all duration-300" />
          </div>
          <div className="flex-grow">
            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-6">
              <div>
                <h3 className="font-black text-4xl uppercase tracking-tight text-black mb-2">{exp.company}</h3>
                <h4 className="font-bold text-2xl uppercase tracking-widest text-gray-600">{exp.role}</h4>
              </div>
              <span className="text-xl font-bold uppercase tracking-widest text-black mt-4 lg:mt-0 px-4 py-2 border-2 border-black whitespace-nowrap">{exp.duration}</span>
            </div>
            <p className="text-xl text-black font-medium leading-relaxed mb-6">
              {exp.description}
            </p>
            {exp.skills && (
              <p className="text-lg text-black font-bold uppercase tracking-tight">
                <span className="text-gray-500 mr-2">SKILLS //</span> {exp.skills}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
export default ExperienceCard;
