import Tag from '../Tag'
import { Card, Descricao, Titulo } from './styles'

const Product = () => (
  <Card>
    <img src="//placehold.it/222x250" />
    <Titulo>Nome do Jogo</Titulo>
    <Tag>Categoria</Tag>
    <Tag>Windows</Tag>
    <Descricao>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis qui
      perferendis eius commodi asperiores optio dolore id ea fugit tempora,
      debitis nihil autem ullam repellat ab consequuntur. Libero, reiciendis
      cumque.
    </Descricao>
  </Card>
)

export default Product
