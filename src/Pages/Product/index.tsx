import { useParams } from 'react-router-dom' // funcao para o parametro
import Hero from '../../components/Hero'
import Section from '../../components/Section'
import Gallery from '../../components/Gallery'
import zelda from '../../assets/images/zelda.png'

const ProductDetails = () => {
  const { id } = useParams() // chama o parametro id
  return (
    <>
      <Hero />
      <Section title="Sobre o Jogo" background="black">
        <p>
          Hogwarts Legacy é um RPG de ação imersivo e de mundo aberto ambientado
          no mundo introduzido pela primeira vez nos livros do Marry Potter.
          Embarque em uma jornada por locais novos e familiares enquanto explora
          e descubra animais fantásticos, personalize seu personagem e crie
          poções, domine o lancamento de feitiços, aprimore talentos e torne-se
          o bruxo que deseja ser.Experimente Hogwarts da década de 1800. Seu
          personagem é um estudante com chave de um antigo searedo que ameaca
          destruir o mundo bruxo. Faca aliados, lute contra os bruxos das trevas
          e decida o destino do mundo bruxo. Seu legado é o que você faz dele.
          Viva o Inesperado.
        </p>
      </Section>
      <Section title="Mais detalhes" background="gray">
        <p>
          <b>Plataforma:</b> PlayStation 5 <br />
          <b>Desenvolvedor:</b> Avalanche Software
          <br />
          <b>Editora:</b> Portkey Games, subsidiária da Warner Bros. Interactive
          Entertainment <br />
          <b>Idiomas:</b> O jogo oferece suporte a diversos idiomas, incluindo
          inglês, espanhol, francês, alemão, italiano, português, entre outros.
          As opções de áudio e legendas podem ser ajustadas nas configurações do
          jogo.
        </p>
      </Section>
      <Gallery name="Zelda" defaultCover={zelda} />
    </>
  )
}

export default ProductDetails
