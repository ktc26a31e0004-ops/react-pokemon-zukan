import { Link } from 'react-router-dom'
import type { PokemonWithJapaneseName } from '../api/pokemonWithJapaneseName'

type PokemonCardProps = {
  pokemon: PokemonWithJapaneseName
}

function PokemonCard({ pokemon }: PokemonCardProps) {
  const id = pokemon.url.split('/').filter(Boolean).pop()
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`

  return (
    <Link className="pokemon-card" to={`/pokemon/${id}`}>
      <p className="pokemon-number">No. {pokemon.number}</p>
      <img src={imageUrl} alt={pokemon.japaneseName} />
      <h2>{pokemon.japaneseName}</h2>
    </Link>
  )
}

export default PokemonCard
