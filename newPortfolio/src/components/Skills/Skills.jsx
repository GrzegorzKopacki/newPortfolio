import styles from "./Skills.module.css";
import {SKILLS} from "../../data/skills"


export function Skills() {
	return (
		<section id="experience" className={styles.container}>
			<h2>Skills</h2>
			<div>
				<div>
					{SKILLS.map((skill, id) => {
						return (
							<div key={id}>
								<img src={skill.image} alt="" />
							</div>
						);
					})}
				</div>
				<ul></ul>
			</div>
		</section>
	);
}
