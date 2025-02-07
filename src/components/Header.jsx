import { Link } from "react-router-dom"
const Header = () => {
  return (
    <header className="h-20 bg-neutral-900">
      <div className="container mx-auto flex items-center h-full">
        <Link to="/" className="uppercase font-bold text-xl">Boolmovies</Link>
      </div>
    </header>
  )
}

export default Header