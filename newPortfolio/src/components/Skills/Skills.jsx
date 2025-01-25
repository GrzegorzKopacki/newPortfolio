import styles from "./Skills.module.css";
import { SKILLS } from "../../data/skills";
import { COMPETENCES } from "../../data/competences";

export function Skills() {
	return (
		<section id="experience" className={styles.container}>
			<h2>Skills</h2>
			<div>
				<div>
					{SKILLS.map((skill, id) => {
						return (
							<div key={id}>
								<img src={skill.image} alt="skills image" />
								<p>{skill.title}</p>
							</div>
						);
					})}
				</div>
				<ul>
					{COMPETENCES.map((compItem, id) => {
						return (
							<li key={id}>
								<img src={compItem.image} alt="competences image" />
								<div>
									<h3>{`${compItem.role}, ${compItem.organisation}`}</h3>
									<p>{`${compItem.startDate}, ${compItem.endDate}`}</p>
									<ul>
										{compItem.experiences.map((exp, id) => {
											return <li key={id}>{exp}</li>;
										})}
									</ul>
								</div>
							</li>
						);
					})}
				</ul>
			</div>
		</section>
	);
}
