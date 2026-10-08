import { documents } from '../../data/content'
import styles from './Documents.module.css'

export function Documents() {
	return (
		<section id='documents' className='section'>
			<div className='container'>
				<p className='eyebrow'>Документы</p>
				<h2 className='section-title'>Нормативная информация</h2>
				<p className='section-lead'>
					Основные документы совета в формате PDF для просмотра и скачивания.
				</p>

				<div className={styles.list}>
					{documents.map(doc => (
						<a
							className={styles.document}
							key={doc.id}
							href={doc.file}
							target='_blank'
							rel='noreferrer'
						>
							<span className={styles.icon} aria-hidden='true'>
								PDF
							</span>
							<span className={styles.info}>
								<strong>{doc.title}</strong>
								<small>{doc.description}</small>
							</span>
							<span className={styles.open} aria-hidden='true'>
								↗
							</span>
						</a>
					))}
				</div>
			</div>
		</section>
	)
}
