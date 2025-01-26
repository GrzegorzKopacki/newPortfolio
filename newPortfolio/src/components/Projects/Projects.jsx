import styles from "./Projects.module.css";
import { PROJECTS } from "../../data/projects";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
	return (
		<section className={styles.container} id="rojects">
			<h2 className={styles.title}>Projects</h2>
			<div className={styles.projects}>
				{PROJECTS.map((project, id) => {
					return <ProjectCard project={project} key={id} />;
				})}
			</div>
		</section>
	);
}
