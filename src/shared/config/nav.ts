import { MainNavItem } from '../types';

interface NavConfig {
  mainNav: MainNavItem[];
  titles: Record<string, string>;
}

export const navConfig: NavConfig = {
  mainNav: [
    {
      title: 'Посты',
      href: '/posts',
    },
    {
      title: 'Документация',
      href: '/docs',
      disabled: true,
    },
    {
      title: 'Расписание',
      href: '/schedule',
    }
  ],
  titles: {
    '/': 'Не грози южному Python, компилируя код у себя на Go',
    '/posts': 'Посты',
    '/docs': 'Документация',
  },
};
