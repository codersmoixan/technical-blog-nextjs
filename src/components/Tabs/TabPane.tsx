export interface TabPaneProps {
	label: string
	name: string
	children: JSX.Element
}

function TabPane({ children }: TabPaneProps) {
	return children
}

export default TabPane
