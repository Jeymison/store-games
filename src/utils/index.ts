//Formatando o preco
export const parseToBrl = (amount = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(amount)
}

// Funcao para o calculo total do carrinho
export const getTotalPrice = (items: Game[]) => {
  return items.reduce((accumulator, currentItem) => {
    if (currentItem.prices.current) {
      return (accumulator += currentItem.prices.current)
    }
    return 0
  }, 0)
}
