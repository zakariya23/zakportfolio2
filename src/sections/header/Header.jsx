import React from 'react'
import headerimage from '../../assets/emojipic.jpg'
import Ball from '../../components/Ball'
import linkedin from './linkedin.png'
import github from './githubicon.png'
import { Canvas } from '@react-three/fiber';
import './header.css'
import Resume from './Zakariya Beg Resume (2).pdf'
import {HiDownload} from 'react-icons/hi'


const Header = () => {
  return (
    <header id='header'>
        <div className="container header__container">
            <div className="header__profile">
            </div>
        </div>
        <h3>
            ZAKARIYA BEG
        </h3>
        <p>
        Passionate Full Stack Developer with extensive experience in crafting modern web applications using React, Redux, Express, JavaScript, Python, and Flask. I've successfully built and managed a range of projects, including an Airbnb clone with user authentication and booking features, an Autotrader-inspired platform for buying and selling vehicles, and a Yelp-like business review application. With a strong foundation in Agile methodologies, Mocha, Chai, PostgreSQL, and Sequelize, I strive to create intuitive and user-friendly solutions for clients. As a dedicated learner and a proud alumnus of App Academy's Full Stack Web Development program, I'm continuously honing my skills and exploring emerging technologies. My background in business management and product management further enhances my ability to communicate effectively with cross-functional teams and deliver high-quality products
        </p>

        <div className="header__socials">
    <Ball icon={linkedin} url="https://www.linkedin.com/in/zakariya-beg-74919a201/" />
    <Ball icon={github} url="https://github.com/zakariya23" />
</div>
<a href={Resume} download className='btn primary'>Download Resume <HiDownload/></a>
<br></br>
    </header>
  )
}

export default Header
