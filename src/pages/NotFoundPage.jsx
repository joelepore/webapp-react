import { Link } from "react-router-dom"
const NotFoundPage = () => {
  return (
    <>
      <div className="text-4xl text-center">La pagina che stai cercando non esiste</div>
      <div className="text-center mt-6">
        <Link to='/' className=" text-blue-400 underline">Vai ai film</Link>
      </div>
    </>
  )
}

export default NotFoundPage