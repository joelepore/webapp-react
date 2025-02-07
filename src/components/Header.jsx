import { Link } from "react-router-dom"
const Header = () => {
  return (
    <header className="container mx-auto">
      <Link to="/" className="uppercase font-bold text-xl">Boolmovies</Link>
    </header>
  )
}

export default Header