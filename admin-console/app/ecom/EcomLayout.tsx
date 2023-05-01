"use client"

import "@/styles/globals.css"
// import type { AppProps } from "next/app"
import { QueryClient, QueryClientProvider } from "react-query"

const queryClient = new QueryClient()

export default function EcomLayout({ children }) {
  return (
    <>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </>
  )
}
