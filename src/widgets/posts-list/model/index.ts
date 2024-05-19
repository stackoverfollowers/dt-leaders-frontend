import { createGate, sample } from "@lib/effector";
import { atom } from "@shared/factory/atom";
import { postsQuery } from "../api";

export const postsModel = atom(() => {
  const Gate = createGate();

  const { $data } = postsQuery;

  sample({
    clock: Gate.open,
    target: postsQuery.refresh,
  });

  return {
    Gate,
    $data,
  };
});