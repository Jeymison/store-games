import ProductsList from '../../components/ProductsList'

import {
  useGetActionGamesQuery,
  useGetEsportesGamesQuery,
  useGetLutaGamesQuery,
  useGetRpgGamesQuery,
  useGetSimulacaoGamesQuery
} from '../../services/api'

const Categories = () => {
  const { data: actionGames, isLoading: isLoadingAction } =
    useGetActionGamesQuery()
  const { data: lutaGames, isLoading: isLoadingLuta } = useGetLutaGamesQuery()
  const { data: esportesGames, isLoading: isLoadingEsportes } =
    useGetEsportesGamesQuery()
  const { data: rpgGames, isLoading: isLoadingRpg } = useGetRpgGamesQuery()
  const { data: simulacaoGames, isLoading: isLoadingSimulacao } =
    useGetSimulacaoGamesQuery()

  return (
    <>
      <ProductsList
        games={actionGames}
        title="Ação"
        background="black"
        id="action"
        isLoading={isLoadingAction}
      />
      <ProductsList
        games={esportesGames}
        title="Esportes"
        background="gray"
        id="esports"
        isLoading={isLoadingEsportes}
      />
      <ProductsList
        games={lutaGames}
        title="Luta"
        background="black"
        id="luta"
        isLoading={isLoadingLuta}
      />
      <ProductsList
        games={rpgGames}
        title="RPG"
        background="gray"
        id="rpg"
        isLoading={isLoadingRpg}
      />
      <ProductsList
        games={simulacaoGames}
        title="Simulação"
        background="black"
        id="simulacao"
        isLoading={isLoadingSimulacao}
      />
    </>
  )
}

export default Categories
