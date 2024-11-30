import React, { useState } from 'react';
import styles from './Projects.module.css';
import '../Styles/Styles.module.css'

import Project_1 from '../../imgs/ShopCarts.png';
import Project_2 from '../../imgs/Art Coperation.png';
import Project_3 from '../../imgs/DesignAgency.png';
import Project_4 from '../../imgs/Media Company.png';
import Project_5 from '../../imgs/TheDeveloper.png';
import Project_6 from '../../imgs/Project_6.png';
import Project_7 from '../../imgs/Project_7.png';
import Project_8 from '../../imgs/Project_8.png';
import Project_9 from '../../imgs/Project_9.png';
import Project_11 from '../../imgs/Project_11.png';
import Project_12 from '../../imgs/Project_12.png';
import Project_13 from '../../imgs/Dribble.png';

const projects = [
  { id: 1, label: "Clothes Store | Men $ Women", image: Project_1, link: "https://eng-muhammadmuhammad.github.io/shop-carts/" }, 
  { id: 2, label: "Art Coperation", image: Project_2, link: "https://eng-muhammadmuhammad.github.io/ArtCooperation/" },
  { id: 3, label: "Design Agency", image: Project_3, link: "https://eng-muhammadmuhammad.github.io/DesignAgancy/" },
  { id: 4, label: "Media Company", image: Project_4, link: "https://eng-muhammadmuhammad.github.io/MediaCompany" },
  { id: 5, label: "Developing Company", image: Project_5, link: "https://Eng-MuhammadMuhammad.github.io/developer-area" },
  { id: 6, label: "Sales Company / UI", image: Project_6, link: "https://www.figma.com/proto/dbRfOWUgS0aivxUxRBiRCe/design?node-id=15%3A324&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=15%3A324" },
  { id: 7, label: "Clothes Shop / UI ", image: Project_7, link: "https://www.figma.com/proto/zzzSomNyeqCJrCooboAgy4/SHOP-REMOTE?node-id=2%3A2&starting-point-node-id=2%3A2" },
  { id: 8, label: "Book Store Card /UI ", image: Project_8, link: "https://www.figma.com/proto/b6pwNopLZRXauTUy9M5B6Q/VIDEO-2-TEST?node-id=10%3A24" },
  { id: 9, label: "Portfolio Design /UI ", image: Project_9, link: "https://www.figma.com/proto/IYPjr2NYksyaVpWIZQyDoH/VIDEO-1-TEST?node-id=0%3A5" },
  { id: 11, label: "Online Courses Application ", image: Project_11, link: "https://www.figma.com/file/hajvYDGBNZ9z7kkUjyWHaV/OnlineCourseApplication?type=design&node-id=0%3A1&mode=design&t=2S1SaiNXYxayfAkB-1" },
  { id: 12, label: "Designer Portfolio ", image: Project_12, link: "https://www.figma.com/file/UH0aetbAhU8RM1rSbEVInx/DesignerPortfolio?type=design&node-id=0%3A1&mode=design&t=bAuyK4duEDUAi0Dl-1" },
  { id: 13, label: "Dribble - Designers Space ", image: Project_13, link: " https://www.figma.com/proto/2vcjhFuxBujlgvxyO1asWG/Dribbble?page-id=0%3A1&node-id=2-8&starting-point-node-id=2%3A8&mode=design&t=2gucn1UQejG2no7F-1" },
];

const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  // Decide the projects to show: only 6 if showAll is false, all if true
  const displayedProjects = showAll ? projects : projects.slice(0, 6);

  return (
    <section id="projects" className={styles.projectsSection}>
      <h2 className={styles.sectionTitle}>MY PROJECTS</h2>
      <div className={styles.projectsContainer}>
        {displayedProjects.map((project) => (
          <a
            key={project.id}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.projectLink}
          >
            <div className={styles.projectCard}>
              <img src={project.image} alt={project.label} className={styles.projectImage} />
              <div className={styles.projectLabel}>{project.label}</div>
            </div>
          </a>
        ))}
      </div>
      <div className={styles.viewAllButtonContainer}>
        <button
          onClick={() => setShowAll(prevState => !prevState)}
          className={styles.viewAllButton}
        >
          {showAll ? "Show Less" : "View All Projects Here"}
        </button>
      </div>
    </section>
  );
};

export default Projects;
