import { makeStyles } from '@mui/styles'
import Typography from '@mui/material/Typography'
import Box, { BoxProps } from '@mui/material/Box'
import clsx from 'clsx'
import isEmpty from "lodash/isEmpty";
import Buttons from "components/Buttons";
import type { Theme } from '@mui/material'

export interface FooterNavListProps extends BoxProps {
	title: string
	list: any[]
	className?: string
}

const useStyles = makeStyles((theme: Theme) => ({
	root: {
    textAlign: 'left'
  },
	list: {
    marginTop: theme.spacing(1)
  },
	item: {
		padding: theme.spacing(1, 0),
		textAlign: 'right',
		[theme.breakpoints.down('md')]: {
			textAlign: 'left'
		}
	}
}))

function FooterNavList(props: FooterNavListProps) {
	const classes = useStyles(props)
	const { title, list, className, ...other } = props

  if (isEmpty(list)) {
    return null
  }

	return (
		<Box className={clsx(className, classes.root)} {...other}>
			<Typography component="span" fontWeight={700}>
				{title}
			</Typography>
      <div className={classes.list}>
        {list.map(item => (
          <div key={item.id} className={classes.item}>
            <Buttons variant="text" space={false}>
              <Typography component="span" variant="caption">{item.label}</Typography>
            </Buttons>
          </div>
        ))}
      </div>
		</Box>
	)
}

export default FooterNavList
