import icon from "../../assets/icon";
import Skill from "../../components/Skill";
import Experience from "../../components/Experience";
import Card from "../../components/Card";
import styles from "./About.module.scss";

const About = () => {
  return (
    <section id="about">
      <div className={styles.about}>
        <h2>About Me</h2>
        <p>
          I am a person who likes to solve problems and have a high sense of
          curiosity. I have been interested in developing the web since several
          years ago. I have a goal to become a senior web developer in the next
          5 years and I want to be a professional who can compete on an
          international scale in the field of technology
        </p>
      </div>
      <section>
        <h2>Skills</h2>
        <div className="skill">
          <div className="flex flex-wrap justify-center">
            <div className="flex flex-col w-40 mx-4 my-4">
              <h4>Programming Languange</h4>
              <Skill icon={icon.javascript} name="Javascript" />
              <Skill icon={icon.typescript} name="Typescript" />
              <Skill icon={icon.go} name="Go" />
            </div>

            <div className="flex flex-col w-40 mx-4 my-4">
              <h4>Front End</h4>
              <Skill icon={icon.html} name="HTML" />
              <Skill icon={icon.css} name="CSS" />
              <Skill icon={icon.sass} name="SCSS" />
              <Skill icon={icon.tailwind} name="Tailwind" />
              <Skill icon={icon.react} name="React Js" />
              <Skill icon={icon.redux} name="Redux" />
              <Skill icon={icon.nextjs} name="Next Js" />
            </div>

            <div className="flex flex-col w-40 mx-4 my-4">
              <h4>Back End</h4>
              <Skill icon={icon.nodejs} name="Node Js" />
              <Skill icon={icon.express} name="Express Js" />
              <Skill icon={icon.api} name="Restful" />
              <Skill icon={icon.jest} name="Jest" />
              <Skill icon={icon.jwt} name="JWT" />
              <Skill icon={icon.postman} name="Postman" />
              <Skill icon={icon.docker} name="Docker" />
            </div>

            <div className="flex flex-col w-40 mx-4 my-4">
              <h4>Databases</h4>
              <Skill icon={icon.mongodb} name="MongoDB" />
              <Skill icon={icon.postgresql} name="Postgresql" />
              <Skill icon={icon.mysql} name="MySQL" />
              <Skill icon={icon.redis} name="Redis" />
              <Skill icon={icon.sequelize} name="Sequelize" />
            </div>

            <div className="w-40 mx-4 my-4">
              <h4>Architecture</h4>
              <div>
                <p>Clean Code</p>
              </div>
              <p>MVC</p>
              <p>CQRS</p>
            </div>

            <div className="flex flex-col w-40 mx-4 my-4">
              <h4>Other</h4>
              <Skill icon={icon.git} name="Git" />
              <Skill icon={icon.linux} name="Linux" />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="experience flex flex-col">
          <Experience
            company="PT. Denso Indonesia"
            role="Operator Production"
            description="
            Ensuring good product quality, running industrial machines, teamwork, kaizen, kanban,
            QCC"
            year="June 2021 - June 2023 (2 years)"
          />
          <Experience
            company="Freelance"
            role="Front End React Js"
            description="Integration polri project :  create dummy data, display API data from server, create user token storage, create reusable react component. The technology used is React Js, Postgresql, Postman, Gitlab"
            year="Mei 2021 - Mei 2023 (2 month)"
          />
          <Experience
            company="Purwadhika"
            role="Student"
            description="
            Learning Frontend : Javascript, HTML, CSS, React Js, Tailwind, Bootstrap. Backend : Node js, Postman, Mysql. Project : Create landing pages"
            year="July 2023 - now"
          />
        </div>
      </section>

      <section>
        <h2>Portofolio</h2>
        <div className="flex justify-center flex-row flex-wrap">
          <Card
            title="Backend Appllication CRUD User"
            skill="Tech : Javascript, Node Js, Postman, JWT, Nodemailer, Clean Code, CQRS"
            link="https://github.com/AnwarAan/Mini-App.git"
          />
          <Card
            title="Fullstack E-Commerce"
            skill="Tech : Typescript, Node Js, HTML, React Js, CSS MongoDB, PostgreSql, Clean Code, MVC, CQRS"
            link="https://github.com/AnwarAan/MC-Store.git"
          />
        </div>
      </section>
    </section>
  );
};

export default About;
