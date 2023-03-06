import isArray from "lodash/isArray";
import type { EmptyObject } from "@/src/tb.types"

function mergeObject(target: EmptyObject = {}, source: EmptyObject = {}) {
  Object.keys(source).forEach((key: any) => {
    if (typeof source[key] === 'object' && !isArray(source[key])) {
      target[key] = mergeObject(target[key], source[key])
    } else {
      target[key] = source[key]
    }
  })

  return target
}

export default mergeObject
