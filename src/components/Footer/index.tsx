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
            <Link to="/categories#rpg">RPG </Link>
            <Link to="/categories#action">Ação</Link>
            <Link to="/categories#esports">Esportes</Link>
            <Link to="/categories#simulacao">Simulação</Link>
            <Link to="/categories#luta">Luta</Link>
          </li>
        </Links>
      </FooterSection>
      <FooterSection>
        <SectionTitle>Acesso rápido</SectionTitle>
        <Links>
          <li>
            <Link to="/#on-sale">Promoções</Link>
            <Link to="/#coming-soon">Em breve</Link>
          </li>
        </Links>
      </FooterSection>
      <p>{currentYear} - &copy; EPLAY Todos os direitos reservados</p>
    </div>
  </Container>
)

export default Footer
