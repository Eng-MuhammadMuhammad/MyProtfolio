import React, { useEffect, useRef } from 'react';
import styles from './Experiences.module.css';
import { FaBriefcase, FaBuilding, FaCalculator } from 'react-icons/fa';

const experiences = [
  {
    date: "Dec 2020 - Dec 2022",
    company: "SWAN TECHNOLOGY",
    duration: "2 Years",
    location: "Homs, Syria",
    role: "Fullstack Web Developer",
    description: "Fullstack Web Developer in Swan Technology.",
    skills: "Web Design, User Interface, Reactjs, Javascript, SASS, Reduxjs, CSS, HTML, Web development, Git, Laravel, Php",
    icon: <FaBriefcase />
  },
  {
    date: "Mar 2023 - May 2024",
    company: "AlReiadh Group",
    duration: "1 Year 2 Months",
    location: "UAE",
    role: "Software Engineer",
    description: "Software engineer in Alreiadh Group for building a system for management with maintenance.",
    skills: "Web Design, User Interface, Javascript, CSS, HTML, Web development, Git, Laravel, Php",
    icon: <FaBuilding />
  },
  {
    date: "Jul 2023 - Feb 2024",
    company: "Adamz Accounting",
    duration: "7 Months",
    location: "UAE",
    role: "Software Engineer",
    description: "Software engineer in Adamz company for building systems and websites.",
    skills: "Web Design, User Interface, Reactjs, Javascript, SASS, Reduxjs, CSS, HTML, Web development, Git, Laravel, Php",
    icon: <FaCalculator />
  }
];

const Experiences = () => {
  const itemsRef = useRef([]);

  useEffect(() => {
   
    const currentItems = itemsRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          }
        });
      },
      { threshold: 0.1 }
    );

    currentItems.forEach((item) => {
      if (item) observer.observe(item);
    });

    
    return () => {
      currentItems.forEach((item) => {
        if (item) observer.unobserve(item);
      });
    };
  }, []); 

  return (
    <div id='experiences' className={styles.experiences}>
      <h2 className={styles.heading}>EXPERIENCES</h2>
      <div className={styles.timeline}>
        {experiences.map((exp, index) => (
          <div
            key={index}
            className={styles.experienceItem}
            ref={(el) => (itemsRef.current[index] = el)}
          >
            <div className={styles.date}>{exp.date}</div>
            <div className={styles.icon}>{exp.icon}</div>
            <div className={styles.details}>
              <h3 className={styles.company}>{exp.company}</h3>
              <p className={styles.duration}>{exp.duration} - {exp.location}</p>
              <p className={styles.role}>{exp.role}</p>
              <p className={styles.description}>{exp.description}</p>
              <p className={styles.skills}>Skills: {exp.skills}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experiences;
