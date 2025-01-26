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
							<h3>{project.title}</h3>
							<p>{project.description}</p>
							<ul>
								{project.skills.map((skill, id) => {
									<li key={id}>{skill}</li>;
								})}
							</ul>
							<div>
								<a href={project.demo}>Demo</a>
								<a href={project.source}>Source</a>
							</div>
						</div>
					);
				})}
			</div>
		</section>
	);
}
