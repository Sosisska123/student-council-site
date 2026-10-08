# Студсовет НПК

Одностраничный сайт-визитка студенческого совета НПК.

## Стек

- React 19
- TypeScript в strict mode
- Vite 8
- React Compiler
- CSS Modules
- Глобальные CSS-переменные для светлой/тёмной темы
- Статическая публикация, совместимая с GitHub Pages

## Запуск

```bash
npm install
npm run dev
```

Проверка типов и production-сборка:

```bash
npm run check
npm run build
npm run preview
```

## Структура

```text
src/
├── components/
│   ├── Header/
│   ├── Hero/
│   ├── About/
│   ├── Members/
│   ├── Events/
│   ├── Documents/
│   ├── Contacts/
│   └── Footer/
├── data/
├── hooks/
├── styles/
├── App.tsx
└── main.tsx
```

## Контент

Реальные телефоны, почта, ссылки на чаты, фотографии членов совета и PDF-документы не были предоставлены в исходном описании. Поэтому они вынесены в `src/data/content.ts` как места для заполнения и не подменены выдуманными реквизитами организации.

После получения фактических данных достаточно изменить этот файл.

## GitHub Pages

Для публикации через GitHub Pages проект уже использует относительный `base: './'`, поэтому сборка не зависит от имени репозитория. Для автоматической публикации можно добавить стандартный GitHub Actions workflow для Vite.
