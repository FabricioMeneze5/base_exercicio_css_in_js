import { ThemeProvider } from 'styled-components'
import Header from './components/Cabecalho'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'
import Theme from './themes/cores'

import EstiloGlobal, { Container } from './styles'

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <EstiloGlobal />
      <Container>
        <Header />
        <Hero />
        <div className="container">
          <ListaVagas />
        </div>
      </Container>
    </ThemeProvider>
  )
}

export default App
