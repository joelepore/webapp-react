import { Outlet } from "react-router-dom"
import Header from "../components/Header"

const DefaultLayout = () => {
  return (
    <>
      <Header />
      <main className="max-w-screen-md mx-auto px-12 md:px-0 py-12">
        <Outlet />
      </main>
    </>
  )
}

export default DefaultLayout