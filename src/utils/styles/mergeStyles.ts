import type { StyleRules } from "@mui/styles/withStyles/withStyles";
import type { EmptyObject } from "@/src/tb.types"

function mergeStyles<
  Props extends object = {},
  ClassKey extends string = string,
>(target: EmptyObject = {}, source: EmptyObject = {}) {
  Object.keys(source).forEach((key: any) => {
    if (typeof source[key] === 'object') {
      target[key] = mergeStyles(target[key], source[key])
    } else {
      target[key] = source[key]
    }
  })

  return target as StyleRules<Props, ClassKey>
}

export default mergeStyles
