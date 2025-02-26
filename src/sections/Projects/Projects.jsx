import styles from "./ProjectsStyles.module.css";
import viberr from "../../assets/viberr.png";
import freshBurger from "../../assets/fresh-burger.png";
import hipsster from "../../assets/hipsster.png";
import fitLift from "../../assets/fitlift.png";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          link="https://rescrap07.netlify.app/"
          h3="ReScrap"
          p="Scrap Buy and Sell- Online "
        />
        <ProjectCard
          src={freshBurger}
          link="https://portfolio-surya07.netlify.app/"
          h3="Portfolio"
          p="Using React and Tailwind"
        />
        <ProjectCard
          src={hipsster}
          link="https://foodie-zones.netlify.app/"
          h3="Foodies Zone"
          p="Restaurant App "
        />
        {/* <ProjectCard
          src={fitLift}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="FitLift"
          p="Fitness App"
        /> */}
      </div>
    </section>
  );
}

export default Projects;
