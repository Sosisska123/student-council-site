import { members } from '../../data/content'
import styles from './Members.module.css'

export function Members() {
	return (
		<section id='members' className='section'>
			<div className='container'>
				<p className='eyebrow'>Команда</p>
				<h2 className='section-title'>Состав студенческого совета</h2>
				<p className='section-lead'>
					Утверждённый состав и распределение ответственности по направлениям.
				</p>

				<div className={styles.grid}>
					{members.map(member => (
						<article className={styles.card} key={member.id}>
							<div className={styles.avatar} aria-hidden='true'>
								{member.initials}
							</div>
							<div>
								<h3>{member.name}</h3>
								<p className={styles.role}>{member.role}</p>
								<p className={styles.direction}>{member.direction}</p>
							</div>
						</article>
					))}
				</div>

				<p className={styles.note}>
					Фотографии и ФИО будут заменены на фактические данные после получения
					материалов организации.
				</p>
			</div>
		</section>
	)
}
