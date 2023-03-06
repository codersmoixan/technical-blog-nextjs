import { useState } from "react";
import { Provider } from "react-redux";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { SnackbarProvider } from "notistack"
import SetupApp from "containers/App"
import ThemeProvider from "core/ThemeProvider";
import store from "../store";
import type { AppProps } from 'next/app'

import "../assets/common.css"

export default function App(props: AppProps) {
  const [queryClient] = useState(() => new QueryClient())

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <SnackbarProvider>
            <SetupApp {...props} />
          </SnackbarProvider>
        </ThemeProvider>
        <ReactQueryDevtools initialIsOpen />
      </QueryClientProvider>
    </Provider>
  )
}
