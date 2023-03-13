/**
 * @author zhengji.su
 * @description MenuIcon
 */

import React from 'react'

interface MenuIconProps {
	width?: number
	height?: number
	color?: string
}

function MenuIcon({ width = 24, height = 24, color = 'currentColor' }: MenuIconProps) {
	return (
		<svg
			height={height}
			viewBox="0 0 32 22"
			width={width}
			xmlns="http://www.w3.org/2000/svg"
			fill={color}
		>
			<g fillRule="evenodd">
				<path d="M0 0h32v2H0zM0 10h32v2H0zM0 20h32v2H0z"></path>
			</g>
		</svg>
	)
}

export default MenuIcon
