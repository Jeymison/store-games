import { useParams } from 'react-router-dom' // funcao para o parametro

import Hero from '../../components/Hero'
import Section from '../../components/Section'
import Gallery from '../../components/Gallery'

import { useGetGameQuery } from '../../services/api'

const ProductDetails = () => {
  const { id } = useParams() // chama o parametro id
  const { data: game } = useGetGameQuery(id!)

  if (!game) {
    return <h2>Carregando...</h2>
  }

  return (
    <>
      <Hero game={game} />
      <Section title="Sobre o Jogo" background="black">
        <p>{game.description}</p>
      </Section>
      <Section title="Mais detalhes" background="gray">
        <p>
          <b>Plataforma:</b> {game.details.system} <br />
          <b>Desenvolvedor:</b> {game.details.developer}
          <br />
          <b>Editora:</b> {game.details.publisher} <br />
          <b>Idiomas:</b> O jogo oferece suporte a diversos idiomas, incluindo
          {game.details.languages.join(', ')}
        </p>
      </Section>
      <Gallery
        name={game.name}
        defaultCover={game.media.cover}
        items={game.media.gallery}
      />
    </>
  )
}

export default ProductDetails

// Join serve para separar o texto seja com - ou virgula
