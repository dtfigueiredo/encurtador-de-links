import { useRouter } from "next/router"
import { useEffect } from "react"
import Header from "../components/Header"
import LinksList from "../components/Links-List"

export default function MyLinks() {

  const routes = useRouter()
  const handleToHomePage = () => routes.push('/')

  useEffect(() => {

  })

  return (
    <section className="body">

      <Header
        name="Home Page"
        linkTo={handleToHomePage} />

      <LinksList />

    </section>
  )
}
