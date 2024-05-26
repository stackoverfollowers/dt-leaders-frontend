import { combine, createEvent, createGate, createStore, sample } from "@lib/effector";
import { atom } from "@shared/factory/atom";
import { postsQuery } from "../api";

export const postsModel = atom(() => {
  const Gate = createGate();

  const setPage = createEvent<number>();
  const setLimit = createEvent<number>();
  
  const $page = createStore(1);
  const $limit = createStore(12);

  const $isLoading = postsQuery.$pending;

  $page.on(setPage, (_, page) => page);
  $limit.on(setLimit, (_, limit) => limit);
  
  const $skip = combine($page, $limit, (page, limit) => (page - 1) * limit);

  const { $data } = postsQuery;

  sample({
    source: {
      skip: $skip,
      limit: $limit,
    },
    clock: [Gate.open, $page],
    target: postsQuery.refresh,
  });


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