import { contacts } from '../../data/content'
import styles from './Contacts.module.css'

export function Contacts() {
	return (
		<section id='contacts' className='section'>
			<div className='container'>
				<div className={styles.panel}>
					<div>
						<p className={styles.eyebrow}>Контакты</p>
						<h2>Есть вопрос или идея?</h2>
						<p className={styles.lead}>
							Используйте доступные каналы связи студенческого совета.
							Фактические реквизиты организации необходимо подставить в файле
							данных.
						</p>
					</div>

					<div className={styles.contacts}>
						<a href={`tel:${contacts.phone.replace(/\D/g, '')}`}>
							<span>Телефон</span>
							<strong>{contacts.phone}</strong>
						</a>
						<a href={`mailto:${contacts.email}`}>
							<span>Электронная почта</span>
							<strong>{contacts.email}</strong>
						</a>
						<div>
							<span>Адрес</span>
							<strong>{contacts.address}</strong>
						</div>
					</div>

					<div className={styles.socials}>
						<a href={contacts.maxUrl} rel='noreferrer'>
							MAX ↗
						</a>
						<a href={contacts.telegramUrl} rel='noreferrer'>
							Telegram ↗
						</a>
					</div>
				</div>
			</div>
		</section>
	)
}
