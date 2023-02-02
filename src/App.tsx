import { ThemeProvider } from 'styled-components'
import { theme } from './styles/Theme'
import { Header } from './components/Header'
import { GlobalStyles } from './styles/GlobalStyles'
import { Tasks } from './components/Tasks'


export function App() {


  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Tasks />
      <GlobalStyles />
    </ThemeProvider>
  )
}

