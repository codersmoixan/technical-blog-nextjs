import type { ConfigOptions } from "@/src/theme/theme";
import type { CSSProperties } from "@mui/styles";
import type { EmptyObject } from "@/src/tb.types"

export interface ComponentStyleOverrides {
  Navigation?: EmptyObject;
  HomeTechnologySharing?: EmptyObject;
  HomeCategory?: EmptyObject;
  HomeCategoryList?: EmptyObject;
  HomeDesigner?: EmptyObject;
  SideSwiper?: EmptyObject;
  SharingCard?: EmptyObject;
}
export type ComponentStyleOverridesKey = keyof ComponentStyleOverrides

export interface CustomThemeOptions {
  config: ConfigOptions;
  styles: {
    verticalCenter: CSSProperties;
    inlineCenter: CSSProperties;
    spaceBetweenCenter: CSSProperties;
    columnCenter: CSSProperties;
  },
  componentStyleOverrides: ComponentStyleOverrides;
}
