import indexOf from "lodash/indexOf";
import union from "lodash/union";
import without from "lodash/without";
import isEqual from "lodash/isEqual";
import isArray from "lodash/isArray";
import type { EmptyObject } from "@/src/tb.types";
import type { ReactElement, ReactNode } from "react";

export function timeSleep(wait: number = 300) {
  return new Promise((resolve) => {
    const timer = setTimeout(() => {
      resolve(true)
      clearTimeout(timer)
    }, wait)
  })
}

export const toggleExist = <T extends any>(a: T[], b: T) => (indexOf(a, b) === -1 ? union(a, [b]) : without(a, b));

export const deepEqual = <T>(aDeps: T, bDeps: T) => isEqual(aDeps, bDeps);

export const getValue = <T extends EmptyObject, K extends keyof T>(obj: T, key: K): T[K] => obj[key]
