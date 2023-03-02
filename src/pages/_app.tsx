import { useState } from "react";
import { Provider } from "react-redux";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { SnackbarProvider } from "notistack"
import SetupApp from "containers/App"
import Theme from "components/Theme";

import store from "../store";

import "../assets/common.css"
import type { AppProps } from 'next/app'

export default function App(props: AppProps) {
  const [queryClient] = useState(() => new QueryClient())

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Theme>
          <SnackbarProvider>
            <SetupApp {...props} />
          </SnackbarProvider>
        </Theme>
        <ReactQueryDevtools initialIsOpen />
      </QueryClientProvider>
    </Provider>
  )
}
