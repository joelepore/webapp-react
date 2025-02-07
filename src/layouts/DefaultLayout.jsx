import { Outlet } from "react-router-dom"
import Header from "../components/Header"

const DefaultLayout = () => {
  return (
    <>
      <Header />
      <main className="max-w-screen-md mx-auto">
        <Outlet />
      </main>
    </>
  )
}

export default DefaultLayout