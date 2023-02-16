import type { ConfigOptions } from "@/src/theme/theme";
import type { CSSProperties } from "@mui/styles";

export interface CustomThemeOptions {
  config: ConfigOptions;
  styles: {
    verticalCenter: CSSProperties;
    inlineCenter: CSSProperties;
    spaceBetweenCenter: CSSProperties;
    columnCenter: CSSProperties;
  }
}
