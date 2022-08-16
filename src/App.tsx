import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "./styles/globalStyles"
import { defaultTheme } from "./styles/themes/default"

function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
