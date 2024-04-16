import { HeaderBar, LinkCart, LinkItens, Links } from './styles'

import logo from '../../assets/images/logo.svg'
import carrinho from '../../assets/images/carrinho.svg'

const Header = () => (
  <HeaderBar>
    <div>
      <img src={logo} alt="Eplay" />
      <nav>
        <Links>
          <LinkItens>
            <a href="#">Catogorias</a>
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
    <LinkCart href="#">
      0 - produto(s)
      <img src={carrinho} alt="carrinho" />
    </LinkCart>
  </HeaderBar>
)

export default Header
