import zelda from '../../assets/images/zelda.png'
import hogwarts from '../../assets/images/fundo_hogwarts.png'
import play from '../../assets/images/play.png'
import fechar from '../../assets/images/fechar.png'
import zoom from '../../assets/images/zoom.png'

import Section from '../Section'
import { Action, Item, Items, Modal, ModalContent } from './styles'

type GalleryItem = {
  type: 'image' | 'video'
  url: string
}

const mock: GalleryItem[] = [
  {
    type: 'image',
    url: zelda
  },
  {
    type: 'image',
    url: hogwarts
  },
  {
    type: 'video',
    url: 'https://www.youtube.com/embed/7zX3D98tt-U?si=hPzPWaSTQm2xkiJB'
  }
]

type Props = {
  defaultCover: string
  name: string
}

const Gallery = ({ defaultCover, name }: Props) => {
  const getMediaCover = (item: GalleryItem) => {
    if (item.type === 'image') return item.url
    return defaultCover
  }

  const getMediaIcon = (item: GalleryItem) => {
    if (item.type === 'image') return zoom
    return play
  }

  return (
    <>
      <Section title="Galeria" background="black">
        <Items>
          {mock.map((media, index) => (
            <Item key={media.url}>
              <img
                src={getMediaCover(media)}
                alt={`Midia ${index + 1} de ${name}`}
              />
              <Action>
                <img
                  src={getMediaIcon(media)}
                  alt="Clique para maximizar a mídia"
                />
              </Action>
            </Item>
          ))}
        </Items>
      </Section>
      {/* //Pop up ao clicar no jogo ela expandi  */}
      <Modal>
        <ModalContent className="container">
          <header>
            <h4>{name}</h4>
            <img src={fechar} alt="Icone de fechar" />
          </header>
          <img src={zelda} />
        </ModalContent>
        <div className="overlay"></div>
      </Modal>
    </>
  )
}

export default Gallery
