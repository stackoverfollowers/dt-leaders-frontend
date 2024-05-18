import { createEvent, createStore, sample } from '@lib/effector';

export const toggle = createEvent();

export const $type = createStore<'login' | 'register'>('login');

sample({
  source: $type,
  clock: toggle,
  fn: (type) => (type === 'login' ? 'register' : 'login'),
  target: $type,
});
