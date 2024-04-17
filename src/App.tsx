import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Banner from './components/Banner'
import Header from './components/Header'
import { GlobalCSS } from './styles'
import ProductsList from './components/ProductsList'

const rotas = createBrowserRouter([
  {
    path: '/', // Criando rotas
    element: (
      <>
        <Banner />
        <ProductsList title="Promoções" background="gray" />
        <ProductsList title="Em breve" background="black" />
      </>
    )
  }
])

function App() {
  return (
    <>
      <GlobalCSS />
      <div className="container">
        <Header />
      </div>
      <RouterProvider router={rotas} />
    </>
  )
}

export default App
