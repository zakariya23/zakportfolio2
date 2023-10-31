import React from 'react';
import './projects.css';
import Project from './Project';
import airbnbImage from './airbnb.png';
import autotraderImage from './autotrader.png';
import platepalImage from './platepal.png';
import blockifyimage from './bl0ckify.png';

const projectData = [
  {
    title: 'AirbnbClone',
    desc: 'AirbnbClone: React, Redux, Express, Sequelize, PostgreSQL, CSS. Developed a fully functional Airbnb clone with user authentication, listing creation, and review features',
    demo: 'https://airbnb-clone-lnnb.onrender.com/',
    github: 'https://github.com/zakariya23/airbnbclone',
    image: airbnbImage
  },
  {
    title: 'AutoQuest',
    desc: 'AutoQuest: HTML, CSS, JavaScript, React, Redux, Python, Flask, PostgreSQL | An Autotrader clone, AutoQuest is a platform for users to search, buy, and sell vehicles.',
    demo: 'https://autoquest.onrender.com/',
    github: 'https://github.com/zakariya23/autoquest',
    image: autotraderImage
  },
  {
    title: 'PlatePal',
    desc: 'Built a Yelp-inspired web application for users to search for businesses, view business pages, and leave reviews and ratings. This was a group project with Google Maps API and react places implementation.',
    demo: 'https://plate-pal-acn4.onrender.com/',
    github: 'https://github.com/zakariya23/Plate-Pal',
    image: platepalImage
  },
  {
    title: 'Bl0ckify',
    desc: 'DigitizeETH revolutionizes the world of collectibles by transforming physical treasures into verifiable digital assets using NEXT.js, the thirdweb SDK, and Ethereums L2 technology; our groundbreaking platform not only won Ethereums Infinite Garden Prize at Hack the North 2023 but is also setting a new standard for the fusion of tangible and digital realms. Learn more about our journey and innovative tech stack: https://devpost.com/software/digitize-eth',
    demo: 'www.bl0ckify.tech',
    github: 'https://github.com/idrak888/digitize-eth/tree/main',
    image: blockifyimage
  }
];

const Projects = () => {
  return (
    <section id='Project' className="light">
        <h3 className='projects-title'>PROJECTS</h3>
        <br></br>
      <div className="projects-container">
        {projectData.map(project => <Project key={project.title} project={project} />)}
      </div>
    </section>
  );
}

export default Projects;
