"use client"

import * as React from "react"
import { ConfigProvider, theme } from "antd"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { type ThemeProviderProps } from "next-themes/dist/types"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <ConfigProvider theme={{ algorithm: theme.darkAlgorithm }}>
      <NextThemesProvider {...props}>{children}</NextThemesProvider>
    </ConfigProvider>
  )
}
