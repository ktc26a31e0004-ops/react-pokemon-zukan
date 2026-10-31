import { useEffect, useState } from 'react'
import PokemonCard from '../components/PokemonCard'
import { fetchPokemonListWithJapaneseNames } from '../api/pokemonWithJapaneseName'
import type { PokemonWithJapaneseName } from '../api/pokemonWithJapaneseName'

function PokemonList() {
  const [pokemon, setPokemon] = useState<PokemonWithJapaneseName[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    const loadPokemon = async () => {
      try {
        const data = await fetchPokemonListWithJapaneseNames()
        setPokemon(data.results)
      } catch (error) {
        console.error(error)
        setErrorMessage('ポケモン一覧の取得に失敗しました')
      } finally {
        setIsLoading(false)
      }
    }

    void loadPokemon()
  }, [])

  if (isLoading) {
    return <main className="page"><p>読み込み中...</p></main>
  }

  if (errorMessage) {
    return <main className="page"><p>{errorMessage}</p></main>
  }

  return (
    <main className="page">
      <h1>ポケモン一覧</h1>
      <div className="pokemon-grid">
        {pokemon.map((item) => (
          <PokemonCard key={item.url} pokemon={item} />
        ))}
      </div>
    </main>
  )
}

export default PokemonList