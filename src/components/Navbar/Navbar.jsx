import icon from "../../Resources/icon/KT.svg"
import styles from "./Navbar.module.css"
import { Home } from 'lucide-react';
import { Info } from 'lucide-react';
import { Wrench } from 'lucide-react';
import { Folder } from 'lucide-react';
import { Phone } from 'lucide-react';
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
            <Home></Home>
            <span>HOME</span>
          </a>

          <a href="#about">
            <Info></Info>
            <span>ABOUT</span>
          </a>

          <a href="#experience">
            <Wrench></Wrench>
            <span>EXPERIENCE</span>
          </a>

          <a href="#projects">
            <Folder></Folder>
            <span>PROJECTS</span>
          </a>

          <a className={styles.contactbtn} onClick={() => setContactOpen(!contactOpen)} href="#contact-ctn">
            <Phone></Phone>
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
