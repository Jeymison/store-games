import { BrowserRouter } from 'react-router-dom'

import Header from './components/Header'
import { GlobalCSS } from './styles'
import Rotas from './routes'

function App() {
  return (
    <BrowserRouter>
      <GlobalCSS />
      <div className="container">
        <Header />
      </div>
      <Rotas />
    </BrowserRouter>
  )
}

export default App
