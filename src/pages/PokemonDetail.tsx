import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { fetchPokemonDetail } from '../api/pokemonDetail'
import type { Pokemon } from '../api/pokemon.type'

function PokemonDetail() {
  const { id } = useParams()
  const [pokemon, setPokemon] = useState<Pokemon | null>(null)
  const [isLoading, setIsLoading] = useState(Boolean(id))
  const [errorMessage, setErrorMessage] = useState(
    id ? '' : 'ポケモンIDがありません',
  )

  useEffect(() => {
    if (!id) {
      return
    }

    const loadPokemon = async () => {
      try {
        const data = await fetchPokemonDetail(id)
        setPokemon(data)
      } catch (error) {
        console.error(error)
        setErrorMessage('ポケモン詳細の取得に失敗しました')
      } finally {
        setIsLoading(false)
      }
    }

    void loadPokemon()
  }, [id])

  if (isLoading) {
    return <main className="page"><p>読み込み中...</p></main>
  }

  if (errorMessage || !pokemon) {
    return (
      <main className="page">
        <p>{errorMessage || 'ポケモンが見つかりません'}</p>
        <Link className="back-link" to="/">一覧へ戻る</Link>
      </main>
    )
  }

  return (
    <main className="page">
      <Link className="back-link" to="/">← 一覧へ戻る</Link>
      <section className="detail-card">
        <p className="pokemon-number">No. {pokemon.id}</p>
        <h1>{pokemon.name}</h1>
        <img
          src={pokemon.sprites.other?.['official-artwork']?.front_default
            ?? pokemon.sprites.front_default
            ?? ''}
          alt={pokemon.name}
          width="240"
          height="240"
        />

        <div className="detail-columns">
          <div>
            <h2>タイプ</h2>
            <ul>
              {pokemon.types.map((item) => (
                <li key={item.slot}>{item.type.name}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2>特性</h2>
            <ul>
              {pokemon.abilities.map((item) => (
                <li key={item.slot}>{item.ability.name}</li>
              ))}
            </ul>
          </div>
        </div>

        <h2>ステータス</h2>
        <ul className="stats-list">
          {pokemon.stats.map((item) => (
            <li key={item.stat.name}>
              <span>{item.stat.name}</span>
              <strong>{item.base_stat}</strong>
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}

export default PokemonDetail