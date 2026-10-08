export type Theme = 'light' | 'dark'

export interface Member {
	id: string
	name: string
	role: string
	direction: string
	initials: string
}

export interface EventItem {
	id: string
	date: string
	title: string
	description: string
	tag: string
}

export interface DocumentItem {
	id: string
	title: string
	description: string
	file: string
}
