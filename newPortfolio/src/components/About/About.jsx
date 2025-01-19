import ABOUT from "../../../assets/about/aboutImage.png";
import CURSOR from "../../../assets/about/cursorIcon.png";
import SERVER from "../../../assets/about/serverIcon.png";
import UI from "../../../assets/about/uiIcon.png";
import styles from "./About.module.css";

export function About() {
	return (
		<section className={styles.container}>
			<h2 className={styles.title}>About</h2>
			<div className={styles.content}>
				<img src={ABOUT} className={styles.aboutImage} />
				<ul className={styles.aboutItems}>
					<li className={styles.aboutItem}>
						<img src={CURSOR} alt="" />
						<div className={styles.aboutItemText}>
							<h3>Frontend Developer</h3>
							<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
						</div>
					</li>
					<li className={styles.aboutItem}>
						<img src={SERVER} alt="" />
						<div className={styles.aboutItemText}>
							<h3>Frontend Developer</h3>
							<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
						</div>
					</li>
					<li className={styles.aboutItem}>
						<img src={UI} alt="" />
						<div className={styles.aboutItemText}>
							<h3>Frontend Developer</h3>
							<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
						</div>
					</li>
				</ul>
			</div>
		</section>
	);
}
