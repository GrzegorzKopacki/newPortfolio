import styles from "./Projects.module.css";
import { PROJECTS } from "../../data/projects";

export function Projects() {
	return (
		<section className={styles.container}>
			<h2>Projects</h2>
			<div>
				{PROJECTS.map((project, id) => {
					return (
						<div key={id}>
							<img src={project.image} alt="project image" />
						</div>
					);
				})}
			</div>
		</section>
	);
}
