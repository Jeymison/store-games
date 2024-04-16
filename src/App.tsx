import Header from './components/Header'
import { Container, GlobalCSS } from './styles'

function App() {
  return (
    <Container>
      <GlobalCSS />
      <div>
        <Header />
      </div>
    </Container>
  )
}

export default App
