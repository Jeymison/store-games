import { Link } from 'react-router-dom'

import { HeaderBar, CartButton, LinkItens, Links } from './styles'
import logo from '../../assets/images/logo.svg'
import carrinho from '../../assets/images/carrinho.svg'

import { open } from '../../store/reducers/cart'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

const Header = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }
  return (
    <HeaderBar>
      <div>
        <Link to="/">
          <img src={logo} alt="Eplay" />
        </Link>
        <nav>
          <Links>
            <LinkItens>
              <Link to="/categories">Categorias</Link>
            </LinkItens>
            <LinkItens>
              <a href="#">Novidades</a>
            </LinkItens>
            <LinkItens>
              <a href="#">Promoções</a>
            </LinkItens>
          </Links>
        </nav>
      </div>
      <CartButton onClick={openCart}>
        {items.length} - produto(s)
        <img src={carrinho} alt="carrinho" />
      </CartButton>
    </HeaderBar>
  )
}

export default Header
