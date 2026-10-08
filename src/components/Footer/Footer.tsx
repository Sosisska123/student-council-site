import styles from './Footer.module.css'

export function Footer() {
	return (
		<footer className={styles.footer}>
			<div className={styles.inner}>
				<div>
					<strong>Студсовет НПК</strong>
					<p>Информационный ресурс студенческого совета.</p>
				</div>
				<a href='#top'>Наверх ↑</a>
			</div>
			<div className={styles.bottom}>
				<span>© 2026 Студсовет НПК</span>
				<span>Одностраничный информационный ресурс</span>
			</div>
		</footer>
	)
}
