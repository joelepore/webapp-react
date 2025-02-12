import { Link } from "react-router-dom"
const Header = () => {
  return (
    <header className="h-20 bg-neutral-900">
      <div className="container mx-auto flex justify-between items-center h-full">
        <Link to="/" className="uppercase font-bold text-xl">Boolmovies</Link>
        <Link to="/movies/add" className="bg-neutral-800 px-4 py-2 rounded-lg hover:bg-neutral-600">Aggiungi film</Link>
      </div>
    </header>
  )
}

export default Header