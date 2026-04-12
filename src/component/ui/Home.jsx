import React from 'react'
import { FaInstagram  } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { SiLeetcode } from "react-icons/si";
import Tilt from "react-parallax-tilt";

export default function Home() {
  return (
    <section id='home' className="home container">
      <div className='home-section grid grid-col-2'>
        <div className="home-content">
          <h1>Hi, I'm <br /> <span>Rohit Singh</span></h1>
          <div className="text-animate">
            <h3>Full-Stack Developer</h3>
          </div>
          <p>Full Stack Developer skilled in JavaScript, React.js, Node.js, Next.js, MongoDB & modern web technologies. I turn ideas into functional digital products.</p>
          <div className="btn-box">
            <a href="" className="btn">View Resume</a>
            <a href="#contact" className="btn">Let's Talk</a>
          </div>
          <div className="home-sci">
            <a href="https://github.com/rohitsingh0318" target="_blank" rel="noopener noreferrer">
              <FaGithub className='home-section-sci-icons' />
            </a>
            <a href="https://www.linkedin.com/in/mr-rohit-singh03/" target="_blank">
              <FaLinkedinIn className='home-section-sci-icons' />
            </a>
            <a href="https://leetcode.com/u/singhrohit1803/" target="_blank" rel="noreferrer">
              <SiLeetcode className="home-section-sci-icons" />
            </a>
             <a href="https://www.instagram.com/rohit_singh__1803/" target="_blank" rel="noreferrer">
              <FaInstagram  className='home-section-sci-icons' />
            </a>
          </div>
        </div>
        <Tilt
          tiltMaxAngleX={20}
          tiltMaxAngleY={20}
          glareEnable={true}
          transitionSpeed={1000}
          perspective={1000}
          scale={1.05}
          gyroscope={true}
          glareColor="transparent"
        >

        <div className='home-hero-img'>
          <img
            className='img-fluid'
            src="public\Home_hero.png" alt="" />
        </div>
        </Tilt>

      </div>
    </section>
  )
}
