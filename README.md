# Шаблон React + TypeScript + Vite

## Стэк разработки
- React
- TypeScript
- [effector](https://effector.dev/)
- [Farfetched](https://ff.effector.dev/)
- [shadcn/ui](https://ui.shadcn.com/)
- [tailwindcss](https://tailwindcss.com/)
- [Husky](https://typicode.github.io/husky/)
- [React Router v6](https://typicode.github.io/husky/)
- [React Hook Form](https://react-hook-form.com/)

## Развертывание проекта

[NPM v10](https://docs.npmjs.com/) и [NodeJS v20](https://nodejs.org/ru/)

1. Выполняем команду:

```shell
pnpm i
```

2. Запуск для разработки:

```shell
pnpm start
```

## Дополнительные команды

- Запуск тестов

```shell
pnpm run test
```

- Проверка ошибок связанных со стилем `JS/TS` кода

```shell
pnpm run lint
```

- Автоматическое исправление ошибок связанных со стилем `JS/TS` кода

```shell
pnpm run lint:fix
```

- Проверка ошибок связанных со стилем `CSS` кода

```shell
pnpm run stylelint
```

- Автоматическое исправление ошибок связанных со стилем `CSS` кода

```shell
pnpm run stylelint:fix
```

Прогонять линтеры в ручную необязательно, так как в проекте используется [husky](https://www.npmjs.com/package/husky) и
[lint-staged](https://www.npmjs.com/package/lint-staged) для запуска `pre-commit` хуков.

## Полезное

- [Соглашение о коммитах](https://www.conventionalcommits.org/ru/)
- [Семантического версионирования](https://semver.org/lang/ru/)
- [Архитектурная методология для фронтенд проектов](https://feature-sliced.design/ru/)
- Именованные экспорты вместо `default`
- Без вложенных тернарных операторов
- `SVG` файлы как `React` компоненты

