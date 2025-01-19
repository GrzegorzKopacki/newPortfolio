import styles from "./Hero.module.css";
import KOPACKI from "../../../assets/hero/heroImage.png";

export function Hero() {
	return (
		<section className={styles.container}>
			<div className={styles.content}>
				<h1 className={styles.title}>Hi, I'm Grzegorz</h1>
				<p className={styles.description}>
					I'm a full-stack developer with 5 years of experience using React and
					NodeJS. Reach out if you'd like to learn more!
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
