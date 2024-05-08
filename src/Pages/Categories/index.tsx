import ProductsList from '../../components/ProductsList'

import {
  useGetActionGamesQuery,
  useGetEsportesGamesQuery,
  useGetLutaGamesQuery,
  useGetRpgGamesQuery,
  useGetSimulacaoGamesQuery
} from '../../services/api'

const Categories = () => {
  const { data: actionGames } = useGetActionGamesQuery()
  const { data: lutaGames } = useGetLutaGamesQuery()
  const { data: esportesGames } = useGetEsportesGamesQuery()
  const { data: rpgGames } = useGetRpgGamesQuery()
  const { data: simulacaoGames } = useGetSimulacaoGamesQuery()

  if (actionGames && lutaGames && esportesGames && rpgGames && simulacaoGames) {
    return (
      <>
        <ProductsList
          games={actionGames}
          title="Ação"
          background="black"
          id="action"
        />
        <ProductsList
          games={esportesGames}
          title="Esportes"
          background="gray"
          id="esports"
        />
        <ProductsList
          games={lutaGames}
          title="Luta"
          background="black"
          id="luta"
        />
        <ProductsList games={rpgGames} title="RPG" background="gray" id="rpg" />
        <ProductsList
          games={simulacaoGames}
          title="Simulação"
          background="black"
          id="simulacao"
        />
      </>
    )
  }
  return <h4>Carregando...</h4>
}

export default Categories
