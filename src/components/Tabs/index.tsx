import { useState, SyntheticEvent, useMemo, ReactElement } from 'react'
import MuiTabs, { TabsProps as MuiTabsProps } from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import { makeStyles } from '@mui/styles'
import type { TabPaneProps } from 'components/Tabs/TabPane'
import type { Theme } from '@mui/material'

export interface TabsProps extends Omit<MuiTabsProps, 'onChange'> {
	onChange?: (newValue: string, event: SyntheticEvent) => void
	children: ReactElement<TabPaneProps>[]
}

const useStyles = makeStyles((theme: Theme) => ({
	tabs: {
		marginBottom: theme.spacing(5)
	},
	flexContainer: {
		justifyContent: 'space-between'
	},
	tab: {
		padding: theme.spacing(2, 0),
		'&.Mui-selected': {
			color: theme.palette.primary.main,
			borderBottomColor: theme.palette.primary.main
		}
	},
	indicator: {
		backgroundColor: theme.palette.primary.main
	}
}))

function Tabs(props: TabsProps) {
	const { onChange, children } = props
	const classes = useStyles(props)

	const [value, setValue] = useState(children?.[0].props.name)

	const handleTabChange = (event: SyntheticEvent, newValue: string) => {
		onChange?.(newValue, event)
		setValue(newValue)
	}

	const tabPane = useMemo(
		() => children.find(child => child.props.name === value),
		[value, children]
	)

	return (
		<div>
			<MuiTabs
				value={value}
				onChange={handleTabChange}
				textColor="secondary"
				indicatorColor="secondary"
				aria-label="secondary tabs example"
				classes={{
					root: classes.tabs,
					flexContainer: classes.flexContainer,
					indicator: classes.indicator
				}}
			>
				{children.map(({ props: tabPaneProps }) => (
					<Tab
						key={tabPaneProps.name}
						value={tabPaneProps.name}
						label={tabPaneProps.label}
						classes={{ root: classes.tab }}
					/>
				))}
			</MuiTabs>
			{tabPane}
		</div>
	)
}

export default Tabs
