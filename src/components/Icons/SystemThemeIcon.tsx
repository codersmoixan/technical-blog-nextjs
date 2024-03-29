interface SystemThemeIconProps {
  width?: number
  height?: number
}

function SystemThemeIcon({ width, height }: SystemThemeIconProps) {
	return (
		<svg
			focusable="false"
			aria-hidden="true"
			viewBox="0 0 24 24"
      width={width}
      height={height}
		>
			<path fill="currentColor" d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16.01H3V4.99h18v14.02zM8 16h2.5l1.5 1.5 1.5-1.5H16v-2.5l1.5-1.5-1.5-1.5V8h-2.5L12 6.5 10.5 8H8v2.5L6.5 12 8 13.5V16zm4-7c1.66 0 3 1.34 3 3s-1.34 3-3 3V9z"></path>
		</svg>
	)
}

export default SystemThemeIcon
