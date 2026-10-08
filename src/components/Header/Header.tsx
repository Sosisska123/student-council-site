import { navigation } from '../../data/content'
import type { Theme } from '../../types'
import styles from './Header.module.css'

interface HeaderProps {
	theme: Theme
	menuOpen: boolean
	onToggleTheme: () => void
	onToggleMenu: () => void
	onNavigate: () => void
}

export function Header({
	theme,
	menuOpen,
	onToggleTheme,
	onToggleMenu,
	onNavigate,
}: HeaderProps) {
	return (
		<header className={styles.header}>
			<div className={styles.inner}>
				<a
					className={styles.brand}
					href='#top'
					onClick={onNavigate}
					aria-label='Студсовет НПК — на главную'
				>
					<span className={styles.logo} aria-hidden='true'>
						С
					</span>
					<span>
						<strong>Студсовет</strong>
						<small>НПК</small>
					</span>
				</a>

				<nav
					className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`}
					aria-label='Основная навигация'
				>
					{navigation.map(item => (
						<a key={item.id} href={`#${item.id}`} onClick={onNavigate}>
							{item.label}
						</a>
					))}
				</nav>

				<div className={styles.actions}>
					<button
						className={styles.themeButton}
						type='button'
						onClick={onToggleTheme}
						aria-label={
							theme === 'light'
								? 'Включить тёмную тему'
								: 'Включить светлую тему'
						}
						title={theme === 'light' ? 'Тёмная тема' : 'Светлая тема'}
					>
						{theme === 'light' ? '☾' : '☀'}
					</button>

					<button
						className={styles.menuButton}
						type='button'
						onClick={onToggleMenu}
						aria-expanded={menuOpen}
						aria-controls='mobile-navigation'
						aria-label={menuOpen ? 'Закрыть меню' : 'Открыть меню'}
					>
						<span />
						<span />
						<span />
					</button>
				</div>
			</div>

			<div
				id='mobile-navigation'
				className={`${styles.mobileNav} ${menuOpen ? styles.mobileNavOpen : ''}`}
			>
				{navigation.map(item => (
					<a key={item.id} href={`#${item.id}`} onClick={onNavigate}>
						{item.label}
					</a>
				))}
			</div>
		</header>
	)
}
