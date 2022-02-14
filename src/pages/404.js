import { useRouter } from "next/router"

const NotFound = () => {

  const routes = useRouter()
  const handleToHomePage = () => routes.push('/')

  return (
    <main className="body text-gray-50">
      <div className="w-full h-full m-auto p-24
      flex flex-col justify-center items-center">

        <img
          src="/notfound.svg"
          alt="ERRO 404" />

        <h2 className="font-headings my-16 font-bold sm:text-2xl">
          Essa página não existe
        </h2>

        <button
          className="btn"
          onClick={handleToHomePage}>
          Home
        </button>
      </div>
    </main>
  );
};

export default NotFound;
