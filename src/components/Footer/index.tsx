import { Container, FooterSection, Link, Links, SectionTitle } from './styles'

//Ano Atual
const currentYear = new Date().getFullYear()

const Footer = () => (
  <Container>
    <div className="container">
      <FooterSection>
        <SectionTitle>Categorias</SectionTitle>
        <Links>
          <li>
            <Link
              title="Clique aqui para acessar jogos de RPG"
              to="/categories#rpg"
            >
              RPG{' '}
            </Link>
            <Link
              title="Clique aqui para acessar jogos de Ação"
              to="/categories#action"
            >
              Ação
            </Link>
            <Link
              title="Clique aqui para acessar jogos de Esportes"
              to="/categories#esports"
            >
              Esportes
            </Link>
            <Link
              title="Clique aqui para acessar jogos de Simulação"
              to="/categories#simulacao"
            >
              Simulação
            </Link>
            <Link
              title="Clique aqui para acessar jogos de Luta"
              to="/categories#luta"
            >
              Luta
            </Link>
          </li>
        </Links>
      </FooterSection>
      <FooterSection>
        <SectionTitle>Acesso rápido</SectionTitle>
        <Links>
          <li>
            <Link title="Clique aqui para acessar as promoções" to="/#on-sale">
              Promoções
            </Link>
            <Link title="Clique aqui para acessar em breve" to="/#coming-soon">
              Em breve
            </Link>
          </li>
        </Links>
      </FooterSection>
      <p>{currentYear} - &copy; EPLAY Todos os direitos reservados</p>
    </div>
  </Container>
)

export default Footer
