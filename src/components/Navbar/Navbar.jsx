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
          <img src={icon} alt="icon" width="40px"/>
        </div>

        <div>
          <a className={styles.active} href="#home">
            <Home width="16px"></Home>
            <span>HOME</span>
          </a>

          <a className={styles.btn} href="#about">
            <Info width="16px"></Info>
            <span>ABOUT</span>
          </a>

          <a className={styles.btn} href="#experience">
            <Wrench width="16px"></Wrench>
            <span>EXPERIENCE</span>
          </a>

          <a className={styles.btn} href="#projects">
            <Folder width="16px"></Folder>
            <span>PROJECTS</span>
          </a>

          <a className={`${styles.contactbtn}`} onClick={() => setContactOpen(!contactOpen)} href="#contact-ctn">
            <Phone width="16px"></Phone>
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
