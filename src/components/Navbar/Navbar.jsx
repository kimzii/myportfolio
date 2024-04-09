import icon from "../../Resources/icon/KT.svg"
import styles from "./Navbar.module.css"
import home from "../../Resources/nav/home.svg"
import about from "../../Resources/nav/about.svg"
import projects from "../../Resources/nav/project.svg"
import contact from "../../Resources/nav/call.png"
import { useState } from "react"


export const Navbar = () => {

  const [contactOpen, setContactOpen] = useState(false);



  return (
    <section>
      <nav>
        <div>
          <img src={icon} alt="icon" width="38px"/>
        </div>

        <div>
          <a href="#home">
            <img src={home} alt="" />
            <span>HOME</span>
          </a>

          <a href="#about">
            <img src={about} alt="" />
            <span>ABOUT</span>
          </a>

          <a href="#experience">
            <img src={projects} alt="" />
            <span>EXPERIENCE</span>
          </a>

          <a href="#projects">
            <img src={projects} alt="" />
            <span>PROJECTS</span>
          </a>

          <a className={styles.contactbtn} onClick={() => setContactOpen(!contactOpen)} href="#contact-ctn">
            <img src={contact} alt="" width="24px" />
            <span>CONTACT</span>
          </a>
        </div>
      </nav>

      <div className={`${styles.contactctn} ${contactOpen && styles.contactOpen}`}> 
      <h2>Contact Me!</h2>
      <div>
        <div>
          <p>Full Name</p>
          <input type="text" />
          <p>Email</p>
          <input type="email" />
          <p>Message</p>
          <input type="text" />
  
          <button>SEND</button>
        </div>
      </div>
    </div>
    </section>
    
  )
}
