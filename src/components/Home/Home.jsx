import styles from "./Home.module.css"
import kim from "../../Resources/kim2.svg";
import linkedin from "../../Resources/social/linkedin.svg"
import facebook from "../../Resources/social/facebook.svg"
import instagram from "../../Resources/social/instagram.svg"
import github from "../../Resources/social/github.svg"

export const Home = () => {
  return (
    <section id="home" className={styles.home}>
        <div className={styles.content}>
          <div className={styles.intro}>
            <div className={styles.greet}>
              <div></div>
              <p>HELLO</p>
              <div></div>
            </div>

            <div>
              <p className={styles.name}>Im</p>
              <p className={`${styles.name} ${styles.myname}`}>Kimzie</p>
              <p className={styles.name}>Torres</p>
            </div>

            <p>A Web Developer, Web Designer, and an Artist</p>

            <button>DOWNLOAD CV</button>
         </div>

        <div>
          <img src={kim} alt="photo" height="360px" />
        </div>
      </div>

      <div className={styles.socials}>
        <a href="www.linkedin.com/in/kimzietorres" target="_blank">
          <img src={linkedin} alt="linkedin" />
        </a>

        <a href="https://web.facebook.com/kreidiprinz/" target="_blank">
          <img src={facebook} alt="facebook" />
        </a>

        <a href="https://www.instagram.com/kimzii_io/" target="_blank">
          <img src={instagram} alt="instagram" />
        </a>

        <a href="https://github.com/kimzii" target="_blank">
          <img src={github} alt="github" width="24px" />
        </a>
      </div>
    </section>
  )
}
