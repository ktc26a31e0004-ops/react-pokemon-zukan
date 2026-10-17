// src/pages/PokemonList.tsx
import { Link } from 'react-router-dom'
import PageHeading from '../components/PageHeading'

export default function PokemonList() {
  return (
    <main className="mx-auto max-w-3xl p-4">
      <PageHeading title="ポケモン一覧" />
      <p className="mb-4">ここには、次の回でポケモンを並べます。</p>
      <Link className="underline" to="/pokemon/1">
        詳細の仮画面を開く
      </Link>
    </main>
  )
}
