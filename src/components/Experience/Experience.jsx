import styles from "./Experience.module.css"
import GDG from "../../Resources/GDG 2023.jpg"

export const Experience = () => {
  return (
    <section className={styles.experience} id="experience">
        <h2>EXPERIENCE</h2>

        <div className={styles.expctn}>
            <img src={GDG} alt="" width="400px"/>
            <h4>Partnership Manager</h4>
            <span>8 months</span>
            <span>Google Developer Student Clubs USeP Obrero</span>
        </div>

        <div className={styles.expctn}>
            <img src={GDG} alt="" width="400px"/>
            <h4>Logistics Head</h4>
            <span>1 month</span>
            <span>Google Developer Group Davao</span>
        </div>

        <div className={styles.expctn}>
            <img src={GDG} alt="" width="400px"/>
            <h4>Student Developer</h4>
            <span>2 years</span>
            <span>University of Southeastern Philippines</span>
        </div>
    </section>
  )
}
