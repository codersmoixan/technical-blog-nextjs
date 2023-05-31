import {makeStyles} from "@mui/styles";
import type {Theme} from "@mui/material";

const useArticleStyles = makeStyles((theme: Theme) => ({
  root: {
    '& span': {
      lineHeight: 1.75,
    },
    '& h1 > span': {
      fontSize: '2.667rem'
    },
    '& h2 > span': {
      fontSize: 30
    },
    '& ul': {
      paddingLeft: theme.spacing(3.5)
    },
    '& hr': {
      margin: theme.spacing(1.25, 0),
      height: 1,
      backgroundColor: theme.colorPalette.primary.secondary,
      border: 'none'
    },
    '& blockquote': {
      padding: theme.spacing(1.5, 2.5),
      borderLeft: `4px solid ${theme.colorPalette.primary.main}`,
      backgroundColor: theme.colorPalette.background.opacity?.(0.2),
      color: theme.colorPalette.text.secondary,
      '& strong': {
        color: theme.colorPalette.primary.main,
      }
    }
  }
}))

export default useArticleStyles
