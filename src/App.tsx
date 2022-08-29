import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { ShoppingCartProvider } from './contexts/ShoppingCartContext'
import { Router } from './Router'
import { GlobalStyle } from './styles/globalStyles'
import { defaultTheme } from './styles/themes/default'

function App() {
  return (
    <ShoppingCartProvider>
      <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
        <GlobalStyle />
      </ThemeProvider>
    </ShoppingCartProvider>
  )
}

export default App
