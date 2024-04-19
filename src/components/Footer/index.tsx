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
            <Link>RPG </Link>
            <Link>Ação</Link>
            <Link>Aventura</Link>
            <Link>Esportes</Link>
            <Link>Simulação</Link>
            <Link>Estratégia</Link>
            <Link>FPS</Link>
          </li>
        </Links>
      </FooterSection>
      <FooterSection>
        <SectionTitle>Acesso rápido</SectionTitle>
        <Links>
          <li>
            <Link>Novidades</Link>
            <Link>Promoções</Link>
            <Link>Em breve</Link>
          </li>
        </Links>
      </FooterSection>
      <p>{currentYear} - &copy; EPLAY Todos os direitos reservados</p>
    </div>
  </Container>
)

export default Footer
