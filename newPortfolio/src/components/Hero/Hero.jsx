import styles from "./Hero.module.css";
import KOPACKI from "../../../assets/hero/heroImage.png";

export function Hero() {
	return (
		<section>
			<div className={styles.container}>
				<h1 className={styles.title}>Hi. Im Grzegorz</h1>
				<p className={styles.description}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem ut
					ipsam quis deserunt voluptates eveniet.
				</p>
				<a href="mailto:gkopacki11@gmail.com" className={styles.contactBtn}>
					Contac me
				</a>
			</div>
			<img src={KOPACKI} alt="" className={styles.heroImg} />
			<div className={styles.topBlur}></div>
			<div className={styles.bottomBlur}></div>
		</section>
	);
}

// 38:49