import { combine, createEvent, createGate, createStore, sample } from "@lib/effector";
import { persist } from 'effector-storage/query'
import { atom } from "@shared/factory/atom";
import { postsQuery } from "../api";

export const postsModel = atom(() => {
  const Gate = createGate();

  const setPage = createEvent<number>();
  const setLimit = createEvent<number>();
  const setTotal = createEvent<number>();
  
  const $page = createStore<string | number>(1);
  persist({ store: $page, key: 'page' })

  const $limit = createStore(12);
  const $total = createStore(0);

  const $isLoading = postsQuery.$pending;

  $page.on(setPage, (_, page) => page);
  $limit.on(setLimit, (_, limit) => limit);
  $total.on(setTotal, (_, total) => total);
  
  const $skip = combine($page, $limit, (page, limit) => (Number(page) - 1) * limit);
  const { $data } = postsQuery;

  sample({
    source: {
      skip: $skip,
      limit: $limit,
    },
    clock: [Gate.open, $page],
    target: postsQuery.refresh,
  });

  sample({
    clock: postsQuery.finished.success,
    fn: ({ result }) => result.total,
    target: $total,
  })

  sample({
    clock: postsQuery.finished.success,
    fn: ({ result }) => result.limit,
    target: $limit,
  })

  return {
    Gate,
    $data,
    $isLoading,
    $page,
    $limit,
    $skip,
    setPage,
    setLimit,
  };
});