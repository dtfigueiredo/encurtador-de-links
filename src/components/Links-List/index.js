import React, { useEffect, useState } from 'react';
import { FiLink, FiTrash2 } from 'react-icons/fi'
import { getSavedLinks, deleteSavedLinks } from '../../pages/api/storage-links'


const LinksList = () => {

  const [myLinks, setMyLinks] = useState([])

  const handleGetSavedLinks = async () => {
    const savedLinks = await getSavedLinks('@LinksEncurtados')
    setMyLinks(savedLinks)
  }

  const handleDeleteLink = (link) => {
    let linkId = link.id

    deleteSavedLinks(myLinks, linkId)
    handleGetSavedLinks()
  }

  useEffect(() => { handleGetSavedLinks() }, [])

  return (
    <main className="flex flex-col justify-center items-center w-11/12 max-w-4xl my-20 mx-auto">

      <h1 className="text-gray-50 text-center text-2xl sm:text-4xl font-headings font-bold mb-4">
        Meus Links Salvos
      </h1>

      <nav className="w-full mt-12">
        <ul>

          {myLinks.length === 0
            ? (<div>
              <h2 className="text-center text-white">LISTA VAZIA</h2>
            </div>)
            : (myLinks.map(link => (
              <li key={link.id} className="list-item">
                <div className="flex justify-start items-center">
                  <span className="text-gray-50 p-2"><FiLink /></span>

                  <p className="text-gray-50 overflow-hidden">
                    <a
                      href={link.link}
                      target="_blank"
                      rel="noopener noreferrer">
                      {link.link}
                    </a>
                  </p>

                  <button className="trash"
                    onClick={() => handleDeleteLink(link)}>
                    <FiTrash2 />
                  </button>
                </div>
              </li>
            )))}
        </ul>
      </nav>
    </main >
  )
};

export default LinksList;
