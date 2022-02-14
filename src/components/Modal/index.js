import React from 'react';
import { GrClose } from 'react-icons/gr'
import { BiCopy } from 'react-icons/bi'

const Modal = (props) => {

  const copyToClipBoard = () => {
    navigator.clipboard.writeText(props.shortLink)
    alert('LINK COPIADO')
  }

  return (
    <section className="flex flex-col justify-center items-center w-11/12 max-w-4xl my-10 mx-auto p-6
    bg-slate-100 text-black rounded-xl animate-slideY">

      <div className="w-full flex justify-between items-center mb-4">
        <h3 className=" text-center text-xl sm:text-2xl font-headings font-bold">
          LINK ENCURTADO
        </h3>

        <button
          onClick={props.closeModal}
          className="text-slate-700 text-2xl font-bold">
          <GrClose />
        </button>
      </div>

      {/* <p className="w-full flex-1 text-slate-600 font-bold text-lg mb-4 overflow-auto">
        {props.inputLink ? props.inputLink : 'Nenhuhm link copiado'}
      </p> */}

      <span className="rounded-xl bg-slate-900 flex items-center w-full text-gray-50 mb-2 py-2 px-4 text-base sm:text-lg mt-4 hover:bg-slate-700">
        {props.shortLink}
        <button
          onClick={copyToClipBoard}
          className="ml-auto trash">
          <BiCopy />
        </button>
      </span>

    </section>
  )
};

export default Modal;
