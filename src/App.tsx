import { Link } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <main>
      <h1>ポケモン図鑑</h1>
      <p>ポケモンの一覧を表示します。</p>
      <Link to="/pokemon/1">フシギダネの詳細を見る</Link>
    </main>
  )
}

export default App