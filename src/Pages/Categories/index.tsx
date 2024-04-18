import Game from '../../Models/Game'
import ProductsList from '../../components/ProductsList'

import resident from '../../assets/images/resident.png'
import diablo from '../../assets/images/diablo.png'
import starWars from '../../assets/images/star_wars.png'
import zelda from '../../assets/images/zelda.png'

const promocoes: Game[] = [
  {
    id: 1,
    category: 'Ação',
    description:
      'Resident Evil 4, conhecido no Japão como Elonazard 4, é um jogo eletrônico de survival horror...',
    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['10%', 'R$ 250,00'],
    image: resident
  },
  {
    id: 2,
    category: 'Ação',
    description:
      'Resident Evil 4, conhecido no Japão como Elonazard 4, é um jogo eletrônico de survival horror...',
    title: 'Resident Evil 4',
    system: 'PS5',
    infos: ['5%', 'R$ 290,00'],
    image: resident
  },
  {
    id: 3,
    category: 'Ação',
    description:
      'Resident Evil 4, conhecido no Japão como Elonazard 4, é um jogo eletrônico de survival horror...',
    title: 'Resident Evil 4',
    system: 'XBOX',
    infos: ['10%', 'R$ 250,00'],
    image: resident
  },
  {
    id: 4,
    category: 'Ação',
    description:
      'Resident Evil 4, conhecido no Japão como Elonazard 4, é um jogo eletrônico de survival horror...',
    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['10%', 'R$ 250,00'],
    image: resident
  }
]

const emBreve: Game[] = [
  {
    id: 5,
    category: 'RPG',
    description:
      'Diablo IV é um RPG de ação em desenvolvimpeto pela Blizzard Entertainment.',
    title: 'Diablo 4',
    system: 'Windows',
    infos: ['17/06'],
    image: diablo
  },
  {
    id: 6,
    category: 'RPG',
    description:
      'Diablo IV é um RPG de ação em desenvolvimpeto pela Blizzard Entertainment.',
    title: 'Zelda',
    system: 'XBOX one',
    infos: ['17/06'],
    image: zelda
  },
  {
    id: 7,
    category: 'RPG',
    description:
      'Diablo IV é um RPG de ação em desenvolvimpeto pela Blizzard Entertainment.',
    title: 'Star Wars',
    system: 'XBOX',
    infos: ['17/06'],
    image: starWars
  },
  {
    id: 8,
    category: 'RPG',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    title: 'Resident evil 4',
    system: 'Nintendo Switch',
    infos: ['17/06'],
    image: resident
  }
]

const Categories = () => (
  <>
    <ProductsList games={promocoes} title="RPG" background="gray" />
    <ProductsList games={emBreve} title="Ação" background="black" />
    <ProductsList games={promocoes} title="Aventura" background="gray" />
    <ProductsList games={emBreve} title="FPS" background="black" />
  </>
)

export default Categories
