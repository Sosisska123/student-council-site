import { useEffect, useState } from 'react'
import type { Theme } from '../types'

const STORAGE_KEY = 'student-council-theme'

function getInitialTheme(): Theme {
	const saved = localStorage.getItem(STORAGE_KEY)

	if (saved === 'light' || saved === 'dark') {
		return saved
	}

	return window.matchMedia('(prefers-color-scheme: dark)').matches
		? 'dark'
		: 'light'
}

export function useTheme() {
	const [theme, setTheme] = useState<Theme>(() => getInitialTheme())

	useEffect(() => {
		localStorage.setItem(STORAGE_KEY, theme)
		document.documentElement.dataset.theme = theme
	}, [theme])

	const toggleTheme = () => {
		setTheme(current => (current === 'light' ? 'dark' : 'light'))
	}

	return { theme, toggleTheme }
}
