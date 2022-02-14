import React from 'react';
import { FiLink } from 'react-icons/fi'

const MainContent = (props) => {

  let spinnerIcon = ''
  props.spinLogo
    ? spinnerIcon = <span className="text-center font-bold text-8xl text-gray-50 my-8 animate-[spin_1s_ease-in-out]">
      <FiLink />
    </span>
    : spinnerIcon = <span className="text-center font-bold text-8xl text-gray-50 my-8">
      <FiLink />
    </span>

  return (
    <main className="flex flex-col justify-center items-center w-11/12 max-w-4xl mt-10 mb-4 mx-auto">

      <h1 className="text-gray-50 text-center text-2xl sm:text-4xl font-headings font-bold">
        ENCURTADOR DE LINKS
      </h1>

      <h2 className="text-gray-50 text-center text-lg sm:text-xl font-headings mt-2">
        Digite o link que deseja encurtar.
      </h2>

      {spinnerIcon}

      <input
        className="w-4/5 py-2 px-4 my-2
            bg-slate-900/50
            text-white sm:text-xl
            rounded-xl
            border 
            border-transparent
            outline-none
            focus:outline-gray-50
            placeholder:text-gray-300"
        type="text"
        value={props.inputLink}
        onChange={(e) => props.handleInputLink(e.currentTarget.value)}
        placeholder="Cole seu link aqui..."
      />

      <button
        className="btn w-4/5 text-gray-50"
        onClick={props.handleShrinkLink}
      >Gerar Link</button>
    </main>
  )
};

export default MainContent;
