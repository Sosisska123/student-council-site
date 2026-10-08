import styles from './About.module.css'

export function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <p className="eyebrow">О совете</p>
        <h2 className="section-title">Организация, которая помогает студентам быть услышанными</h2>
        <p className="section-lead">
          Студенческий совет — площадка для инициатив, проектов и взаимодействия
          обучающихся с образовательной организацией.
        </p>

        <div className={styles.grid}>
          <article className={styles.card}>
            <span className={styles.number}>01</span>
            <h3>Инициативы</h3>
            <p>Предлагаем и реализуем идеи, которые делают студенческую жизнь насыщеннее.</p>
          </article>
          <article className={styles.card}>
            <span className={styles.number}>02</span>
            <h3>Мероприятия</h3>
            <p>Организуем события, проекты и активности для студентов колледжа.</p>
          </article>
          <article className={styles.card}>
            <span className={styles.number}>03</span>
            <h3>Обратная связь</h3>
            <p>Собираем предложения студентов и поддерживаем связь с администрацией.</p>
          </article>
        </div>
      </div>
    </section>
  )
}
