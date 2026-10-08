import type { DocumentItem, EventItem, Member } from '../types'

export const navigation = [
	{ id: 'about', label: 'О совете' },
	{ id: 'members', label: 'Состав' },
	{ id: 'events', label: 'Мероприятия' },
	{ id: 'documents', label: 'Документы' },
	{ id: 'contacts', label: 'Контакты' },
] as const

export const members: Member[] = [
	{
		id: 'chair',
		name: 'ФИО председателя',
		role: 'Председатель',
		direction: 'Руководство',
		initials: 'ПС',
	},
	{
		id: 'deputy',
		name: 'ФИО заместителя',
		role: 'Заместитель председателя',
		direction: 'Руководство',
		initials: 'ЗП',
	},
	{
		id: 'media',
		name: 'ФИО участника',
		role: 'Ответственный',
		direction: 'Медиа и информационная работа',
		initials: 'МИ',
	},
	{
		id: 'events',
		name: 'ФИО участника',
		role: 'Ответственный',
		direction: 'Мероприятия',
		initials: 'М',
	},
]

export const events: EventItem[] = [
	{
		id: 'plan',
		date: 'Учебный год',
		title: 'План работы студенческого совета',
		description:
			'Здесь размещается актуальный план мероприятий и проектов студенческого совета.',
		tag: 'План',
	},
	{
		id: 'event-placeholder',
		date: 'Дата мероприятия',
		title: 'Название мероприятия',
		description:
			'Краткое описание мероприятия, его назначения и результатов будет добавлено после получения материалов.',
		tag: 'Анонс',
	},
	{
		id: 'report-placeholder',
		date: 'Дата отчёта',
		title: 'Отчёт о проведённом мероприятии',
		description:
			'Раздел предназначен для коротких отчётов о проектах и событиях студенческого совета.',
		tag: 'Отчёт',
	},
]

export const documents: DocumentItem[] = [
	{
		id: 'regulation',
		title: 'Положение о студенческом совете',
		description: 'Нормативный документ организации в формате PDF.',
		file: '/docs/regulation-placeholder.pdf',
	},
]

export const contacts = {
	phone: '+7 (855) 539-20-12',
	email: 'Nizhnekamsk.Politeh@tatar.ru',
	address: 'ГАПОУ «Нижнекамский политехнический колледж имени Е.Н. Королёва»',
	maxUrl: 'https://max.ru/join/tM-cbPdQfEYwJe16ZqFeuMrijB51x_5SXuk9i2RxsaQ',
	telegramUrl: 'https://t.me/',
} as const
