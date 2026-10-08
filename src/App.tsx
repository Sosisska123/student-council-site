import { useEffect, useState } from 'react'
import { Header } from './components/Header/Header'
import { Hero } from './components/Hero/Hero'
import { About } from './components/About/About'
import { Members } from './components/Members/Members'
import { Events } from './components/Events/Events'
import { Documents } from './components/Documents/Documents'
import { Contacts } from './components/Contacts/Contacts'
import { Footer } from './components/Footer/Footer'
import { useTheme } from './hooks/useTheme'
import styles from './App.module.css'

export default function App() {
	const { theme, toggleTheme } = useTheme()
	const [menuOpen, setMenuOpen] = useState(false)

	useEffect(() => {
		document.documentElement.dataset.theme = theme
	}, [theme])

	const closeMenu = () => setMenuOpen(false)

	return (
		<div className={styles.app}>
			<Header
				theme={theme}
				menuOpen={menuOpen}
				onToggleTheme={toggleTheme}
				onToggleMenu={() => setMenuOpen(value => !value)}
				onNavigate={closeMenu}
			/>

			<main>
				<Hero />
				<About />
				<Members />
				<Events />
				<Documents />
				<Contacts />
			</main>

			<Footer />
		</div>
	)
}
