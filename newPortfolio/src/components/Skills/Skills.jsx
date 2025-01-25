import styles from "./Skills.module.css";
import { SKILLS } from "../../data/skills";
import { COMPETENCES } from "../../data/competences";

export function Skills() {
	return (
		<section id="experience" className={styles.container}>
			<h2 className={styles.title}>Skills</h2>
			<div className={styles.content}>
				<div className={styles.skills}>
					{SKILLS.map((skill, id) => {
						return (
							<div className={styles.skill} key={id}>
								<div className={styles.skillImageContainer}>
									<img src={skill.image} alt="skills image" />
								</div>
									<p>{skill.title}</p>
							</div>
						);
					})}
				</div>
				<ul className={styles.competences}>
					{COMPETENCES.map((compItem, id) => {
						return (
							<li key={id} className={styles.competencesItem}>
								<img src={compItem.image} alt="competences image" />
								<div className={styles.competencesItemDetails}>
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
