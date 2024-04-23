import { Route, Routes } from 'react-router-dom'

import Home from './Pages/Home'
import Categories from './Pages/Categories'
import ProductDetails from './Pages/Product'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/categories" element={<Categories />} />
    <Route path="/product/:id" element={<ProductDetails />} />
  </Routes>
)

export default Rotas
