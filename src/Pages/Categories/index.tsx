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
        <ProductsList games={actionGames} title="Ação" background="black" />
        <ProductsList
          games={esportesGames}
          title="Esportes"
          background="gray"
        />
        <ProductsList games={lutaGames} title="Luta" background="black" />
        <ProductsList games={rpgGames} title="RPG" background="gray" />
        <ProductsList
          games={simulacaoGames}
          title="Simulação"
          background="black"
        />
      </>
    )
  }
  return <h4>Carregando...</h4>
}

export default Categories
