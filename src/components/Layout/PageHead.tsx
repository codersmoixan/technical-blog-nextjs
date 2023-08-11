import Head from 'next/head'
import type { ReactNode } from 'react'

interface PageHeadProps {
	title: string
	content: string
	children: ReactNode
}

function PageHead({ title, content, children }: PageHeadProps) {
	return (
		<>
			<Head>
				<title>{title}</title>
				<meta name="description" content={content} />
			</Head>
			{children}
		</>
	)
}

export default PageHead
