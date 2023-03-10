import { useState } from 'react'
import { Provider } from 'react-redux'
import { QueryClientProvider, QueryClient, Hydrate } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { SnackbarProvider } from 'notistack'
import SetupApp from 'containers/App'
import ThemeProvider from 'core/ThemeProvider'
import store from '../store'
import type { AppProps } from 'next/app'

import '../assets/common.css'
import '../assets/prism/prism.css'
import '../assets/prism/prism'

export default function App(props: AppProps) {
	const [queryClient] = useState(() => new QueryClient())

	return (
		<Provider store={store}>
			<QueryClientProvider client={queryClient}>
				<Hydrate state={props.pageProps.dehydratedState}>
					<ThemeProvider>
						<SnackbarProvider>
							<SetupApp {...props} />
						</SnackbarProvider>
					</ThemeProvider>
				</Hydrate>
				<ReactQueryDevtools initialIsOpen />
			</QueryClientProvider>
		</Provider>
	)
}
