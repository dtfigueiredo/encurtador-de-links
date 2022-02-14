import React from 'react';
import { FiLink, FiTrash2 } from 'react-icons/fi'


const LinksList = () => {

  const links = [
    'https://javascript.plainenglish.io/best-javascript-ide-in-2022-d8743f637a7e',
    'https://devdojo.com/techvblogs/how-to-build-a-discord-bot-with-node-js',
  ];


  return (
    <main className="flex flex-col justify-center items-center w-11/12 max-w-4xl my-20 mx-auto">

      <h1 className="text-gray-50 text-center text-2xl sm:text-4xl font-headings font-bold mb-4">
        Meus Links Salvos
      </h1>

      <nav className="w-full mt-12">
        <ul>

          {links.map((link, index) => (
            <li key={index} className="list-item">
              <div className="flex justify-start items-center">
                <span className="text-gray-50 p-2"><FiLink /></span>

                <p className="text-gray-50 overflow-hidden">
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer">
                    {link}
                  </a>
                </p>

                <button className="trash"><FiTrash2 /></button>
              </div>
            </li>
          ))}
        </ul>
      </nav>
    </main>
  )
};

export default LinksList;
