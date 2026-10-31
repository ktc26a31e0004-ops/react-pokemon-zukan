import { Link, useParams } from 'react-router-dom'

function PokemonDetail() {
  const { id } = useParams()

  return (
    <main>
      <h1>ポケモン詳細</h1>
      <p>ポケモンID: {id}</p>
      <p>ここにポケモンの詳細を表示します。</p>
      <Link to="/">一覧へ戻る</Link>
    </main>
  )
}

export default PokemonDetail