import React from 'react'

export default function About() {
  return (
    <section id='about' className="about">
      <h2 className='heading'>About <span>Me</span></h2>
      <div className="container about-container">

        <div className="about-img">
          <img src="dev01.png" alt="" />
          <span className="circle-spin img-fluid"></span>
        </div>

        <div className="about-content">
          <h3>Full-Stack Devloper</h3>
         <p>
            I am a passionate Full-Stack Developer with strong skills in both frontend and backend development. I work with technologies like JavaScript, React.js, Node.js, Next.js, and MongoDB to build modern, scalable, and user-friendly web applications. I enjoy transforming ideas into real-world digital products by writing clean, efficient, and maintainable code. I have experience in designing responsive user interfaces, developing REST APIs, and managing databases. I am always eager to learn new technologies and continuously improve my skills to create high-performance applications.
         </p>
          <div className="btn-box btns">
            <a href="" className="btn">Read More</a>
          </div>
        </div>
      </div>
    </section>
  )
}
