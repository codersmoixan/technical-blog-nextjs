import clsx from "clsx";
import Typography from "@mui/material/Typography";
import {makeStyles} from "@mui/styles";
import {Theme} from "@mui/material";
import {useState} from "react";

interface TagsProps {
  onChange?: (tag: string) => void
  classes?: Partial<ReturnType<typeof useStyles>>
}

type TagInfo = {
  label: string;
  total: number;
}

type Tags = Record<string, TagInfo>;

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    '& .tag': {
      display: 'flex',
      alignItems: 'center',
      color: theme.colorPalette.text.secondary,
      cursor: 'pointer',
      '&::after': {
        content: '""',
        display: 'inline-block',
        margin: theme.spacing(0, 2),
        width: 1,
        height: 14,
        backgroundColor: theme.colorPalette.primary.colorSecondary
      },
      '&:last-of-type::after': {
        display: 'none'
      },
      '&.active': {
        color: theme.palette.primary.main
      },
    }
  }
}))

function Tags({ onChange, ...other }: TagsProps) {
  const classes = useStyles(other)

  const [active, setActive] = useState<keyof typeof tags>('all')

  const tags: Tags = {
    all: {
      label: '全部',
      total: 0
    },
    passed: {
      label: '已发布',
      total: 0
    },
    review: {
      label: '审核中',
      total: 0
    },
    pass: {
      label: '未通过',
      total: 0
    }
  }

  return (
    <div className={classes.root}>
      {Object.keys(tags).map((tag) => (
        <div
          key={tag}
          className={clsx('tag', {
            active: tag === active
          })}
          onClick={() => setActive(tag)}
        >
          <Typography color="inherit">{tags[tag].label} ({tags[tag].total})</Typography>
        </div>
      ))}
    </div>
  )
}

export default Tags
