import styles from './Hero.module.css'

export function Hero() {
	return (
		<section id='top' className={styles.hero}>
			<div className={styles.glow} aria-hidden='true' />
			<div className='container'>
				<div className={styles.content}>
					<p className={styles.kicker}>
						<span /> Студенческое самоуправление
					</p>
					<h1>Студсовет НПК</h1>
					<p className={styles.subtitle}>
						Информационный ресурс студенческого совета Нижнекамского
						политехнического колледжа имени Е.Н. Королёва.
					</p>

					<div className={styles.actions}>
						<a className={styles.primaryButton} href='#events'>
							Мероприятия <span aria-hidden='true'>→</span>
						</a>
						<a className={styles.secondaryButton} href='#contacts'>
							Связаться
						</a>
					</div>
				</div>

				<div className={styles.visual} aria-hidden='true'>
					<div className={styles.visualCard}>
						<span className={styles.visualLabel}>СТУДЕНЧЕСКИЙ СОВЕТ</span>
						<strong>Инициатива.</strong>
						<strong>Участие.</strong>
						<strong>Результат.</strong>
						<div className={styles.visualLine} />
						<span>НПК · 2026</span>
					</div>
				</div>
			</div>
		</section>
	)
}
