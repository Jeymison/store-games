class Game {
  category: string
  title: string
  system: string
  description: string
  infos: string[]
  image: string
  id: number

  constructor(
    category: string,
    title: string,
    system: string,
    description: string,
    infos: string[],
    image: string,
    id: number
  ) {
    this.id = id
    this.image = image
    this.infos = infos
    this.description = description
    this.system = system
    this.title = title
    this.category = category
  }
}

export default Game
