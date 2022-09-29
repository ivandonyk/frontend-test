import { addDecorator } from "@storybook/react"
import { ThemeProvider } from "@mui/material/styles"
import { CssBaseline } from "@mui/material"

import theme from "../src/theme"

addDecorator((story) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    {story()}
  </ThemeProvider>
))

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
}
