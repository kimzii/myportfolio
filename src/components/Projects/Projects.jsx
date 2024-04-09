import "./Projects.css"
import repo from "../../Resources/projects/github-repo.svg"


export const Projects = () => {
  return (
    <section id="projects"> 
      <h2>PROJECTS</h2>

      <div id="project-ctn">
        <div id="RockPaperScissor">
          <div className="project-image">
            <button className="visit">
              <a href="https://kimzii.github.io/RockPaperScissor/" target="_blank">Visit Project</a >
            </button>
          </div>

          <div className="project-details">
            <div className="vl">
              <span>&lt;div&gt;</span>
              <div className="line"></div>
              <span>&lt;/div&gt;</span>
            </div>

            <div className="details">
              <h4>Rock Paper Scissor ft. Pokemon</h4>
              <p>
                Welcome to Rock, Paper, Scissors: Pokémon Edition! Enter a world
                where the classic game meets the Pokémon universe. Choose your
                moves wisely and battle to become the ultimate champion. Let the
                games begin!
              </p>

              <section className="tech-used">
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
              </section>

              <button className="visit-repo">
                <a href="https://github.com/kimzii/RockPaperScissor"target="_blank">
                  <img src={repo} width="28px" />
                  <span>Visit Github Repository</span></a>
              </button>

            </div>
          </div>
        </div>

        <div id="Riffrant">
          <div className="project-image">
            <button className="visit">
              <a href="https://riffrant.vercel.app/" target="_blank">Visit Project</a >
            </button>
          </div>

          <div className="project-details">
            <div className="vl">
              <span>&lt;div&gt;</span>
              <div className="line"></div>
              <span>&lt;/div&gt;</span>
            </div>

            <div className="details">
              <h4>Riffrant</h4>
              <p>
                Join the conversation, express your thoughts, and build
                connections in a space designed for the joy of sharing—your very
                own hub for daily dialogue and meaningful interactions.
              </p>

              <section className="tech-used">
                <span>HTML</span>
                <span>CSS</span>
                <span>Next.Js</span>
                <span>TypeScript</span>
                <span>MongoDB</span>
                <span>React</span>
                <span>Tailwind</span>
                <span>Springboot</span>
              </section>

              <button className="visit-repo">
                <a href="https://github.com/roiceee/riffrant" target="_blank">
                  <img src={repo} width="28px" />
                  <span>Visit Github Repository</span>
                </a>
              </button>

            </div>
          </div>
        </div>

        <div id="ProverbsWebApp">
          <div className="project-image">
            <button className="visit">
              <a href="https://kimzii.github.io/ProverbsWebApp/" target="_blank">Visit Project</a>
            </button>
          </div>

          <div className="project-details">
            <div className="vl">
              <span>&lt;div&gt;</span>
              <div className="line"></div>
              <span>&lt;/div&gt;</span>
            </div>

            <div className="details">
              <h4>Proverbs Web App</h4>
              <p>
                Whether you seek a daily dose of inspiration or timeless advice,
                our web app is here to illuminate your path with the wisdom of
                the ages. Discover, share, and enrich your life with Proverbial
                Wisdom today!
              </p>

              <section className="tech-used">
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
              </section>

              <button className="visit-repo">
                <a href="https://github.com/kimzii/ProverbsWebApp" target="_blank">
                  <img src={repo} width="28px" />
                  <span>Visit Github Repository</span>
                </a>
              </button>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
