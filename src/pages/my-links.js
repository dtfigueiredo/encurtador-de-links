import { useRouter } from "next/router"
import Header from "../components/Header"
import LinksList from "../components/Links-List"

export default function MyLinks() {

  const routes = useRouter()
  const handleToHomePage = () => routes.push('/')

  return (
    <section className="body">

      <Header
        name="Home Page"
        linkTo={handleToHomePage} />

      <LinksList />

    </section>
  )
}
