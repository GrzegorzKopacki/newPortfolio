import styles from "./Hero.module.css";
import KOPACKI from "../../../assets/hero/heroImage.png";

export function Hero() {
	return (
		<section className={styles.container}>
			<div className={styles.content}>
				<h1 className={styles.title}>Hi, Im Grzegorz</h1>
				<p className={styles.description}>
					Im a full-stack developer with 5 years of experience using React and
					NodeJS. Reach out if youd like to learn more!
				</p>
				<a href="mailto:myemail@email.com" className={styles.contactBtn}>
					Contact Me
				</a>
			</div>
			<img src={KOPACKI} alt="" className={styles.heroImg} />
			<div className={styles.topBlur}></div>
			<div className={styles.bottomBlur}></div>
		</section>
	);
}

// 38:49
