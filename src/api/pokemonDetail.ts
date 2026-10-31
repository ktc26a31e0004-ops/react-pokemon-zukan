import { API_BASE_URL } from '../config'
import type { Pokemon } from './pokemon.type'

export const fetchPokemonDetail = async (id: string): Promise<Pokemon> => {
  const response = await fetch(`${API_BASE_URL}/pokemon/${id}`)

  if (!response.ok) {
    throw new Error('ポケモン詳細の取得に失敗しました')
  }

  return (await response.json()) as Pokemon
}
