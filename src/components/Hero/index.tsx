import bannerHogwarts from '../../assets/images/fundo_hogwarts.png'
import Button from '../Button'
import Tag from '../Tag'
import { Banner, Infos } from './styles'

const Hero = () => (
  <Banner style={{ backgroundImage: `url(${bannerHogwarts})` }}>
    <div className="container">
      <div>
        <Tag>RPG</Tag>
        <Tag>PS5</Tag>
      </div>

      <Infos>
        <h2>Hogwarts Legacy</h2>
        <p>
          <span>De R$ 290,90</span> Por R$ 190,90
        </p>
        <Button
          variant="primary"
          type="button"
          title="clique aqui para adicionar esse jogo"
        >
          Adicionar ao carrinho
        </Button>
      </Infos>
    </div>
  </Banner>
)

export default Hero
