import styles from "./About.module.css"
import z from "../../Resources/z.jpg"
import java from "../../Resources/tech/java.svg"
import html from "../../Resources/tech/html.svg"
import css from "../../Resources/tech/css.svg"
import tailwind from "../../Resources/tech/tailwind.svg"
import javascript from "../../Resources/tech/js.svg"
import git from "../../Resources/tech/git.svg"
import github from "../../Resources/tech/github.svg"
import figma from "../../Resources/tech/figma.svg"
import react from "../../Resources/tech/react.svg"
import vite from "../../Resources/tech/vite.svg"
import php from "../../Resources/tech/php.svg"
import sql from "../../Resources/tech/sql.svg"

export const About = () => {
  return (
    <section id="about" className={styles.about}>
      <h2>ABOUT ME</h2>

      <div className={styles.aboutIntroduction}>
        <img src={z} alt="Kimzie" />

        <div>
          <p>Hello World!</p>
          <p>
            I am Kimzie T. Torres a BSIT student from the University of
            Southeastern Philippines. With a passion for crafting innovative
            digital solutions, I am on a journey to become a proficient web
            developer. Join me as I embark on this exciting path of learning and
            exploration in the realm of web development. Welcome to my web
            portfolio!
          </p>
        </div>
      </div>

      <h4>TECHNOLOGY USED</h4>

      <div className={styles.techCtn}>
        <div>
          <img src={java} alt="Java" />
        </div>

        <div>
          <img src={html} alt="Html" />
        </div>

        <div>
          <img src={css} alt="Css" />
        </div>

        <div>
          <img src={tailwind} alt="tailwind" />
        </div>

        <div>
          <img src={javascript} alt="JavaScript" />
        </div>

        <div>
          <img src={git} alt="Git" />
        </div>

        <div>
          <img src={github} alt="Github" />
        </div>

        <div>
          <img src={figma} alt="Figma" />
        </div>

        <div>
          <img src={react} alt="React"/>
        </div>

        <div>
          <img src={vite} alt="Vite" />
        </div>

        <div>
          <img src={php} alt="Php"/>
        </div>

        <div>
          <img src={sql} alt="Sql" />
        </div>
      </div>
    </section>
  )
}
