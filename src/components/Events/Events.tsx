import { events } from '../../data/content'
import styles from './Events.module.css'

export function Events() {
	return (
		<section id='events' className='section'>
			<div className='container'>
				<p className='eyebrow'>Мероприятия</p>
				<h2 className='section-title'>Что происходит в студсовете</h2>
				<p className='section-lead'>
					Анонсы предстоящих событий и короткие отчёты о завершённых проектах.
				</p>

				<div className={styles.list}>
					{events.map(e => (
						<article className={styles.item} key={e.id}>
							<div className={styles.date}>{e.date}</div>
							<div className={styles.body}>
								<span className={styles.tag}>{e.tag}</span>
								<h3>{e.title}</h3>
								<p>{e.description}</p>
							</div>
							<span className={styles.arrow} aria-hidden='true'>
								↗
							</span>
						</article>
					))}
				</div>
			</div>
		</section>
	)
}
