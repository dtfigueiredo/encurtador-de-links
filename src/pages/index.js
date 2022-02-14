import React, { useState } from 'react'
import { useRouter } from "next/router"

import Header from "../components/Header"
import MainContent from "../components/Main"
import Modal from "../components/Modal"

import api from "./api/api"
import { getSavedLinks, saveNewLink, deleteSavedLinks } from "./api/storage-links"
import { GrClose } from 'react-icons/gr'

const Home = () => {

  const routes = useRouter()
  const handleToMyLinksPage = () => routes.push('/my-links')

  const [showModal, setShowModal] = useState(false)
  const [spinLogo, setSpinLogo] = useState(false)

  const [invalidLink, setInvalidLink] = useState(false)

  const [inputLink, setInputLink] = useState('')
  const [shortLink, setShortLink] = useState({})

  const handleInputLink = (inputvalue) => setInputLink(inputvalue)

  const handleShrinkLink = async () => {
    try {
      const response = await api.post('/shorten', {
        long_url: inputLink
      })

      setShortLink(response.data.link)
      setInvalidLink(false)
      setSpinLogo(true)
      setShowModal(true)
      setInputLink('')
      saveNewLink('@LinksEncurtados', response.data)

    } catch {
      setInvalidLink(true)
      setInputLink('')
    }
  }

  const closeModal = () => {
    setSpinLogo(false)
    setShowModal(false)
  }

  return (
    <main className="body">

      <Header
        name="My Links"
        linkTo={handleToMyLinksPage} />

      <MainContent
        spinLogo={spinLogo}
        inputLink={inputLink}
        handleInputLink={handleInputLink}
        handleShrinkLink={handleShrinkLink} />

      {showModal && (
        <Modal
          inputLink={inputLink}
          closeModal={closeModal}
          shortLink={shortLink} />)
      }

      {invalidLink && (
        <div className="flex justify-between items-center w-1/3 mx-auto py-1 px-4 rounded-xl bg-red-900/50 text-gray-100">
          <p>LINK INVÁLIDO! CORRIJA E REENVIE.</p>

          <button
            onClick={() => setInvalidLink(false)}>
            <GrClose />
          </button>
        </div>
      )}

    </main>
  )
}

export default Home