import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa'

const Header = (props) => {
  return (
    <header className="header">

      <a
        href="https://github.com/dtfigueiredo"
        target="_blank"
        rel="noopener noreferrer">
        <FaGithub className="social-link" />
      </a>

      <a
        href="https://www.linkedin.com/in/dtfigueiredo/"
        target="_blank"
        rel="noopener noreferrer">
        <FaLinkedin className="social-link" />
      </a>

      <button
        className="btn ml-4"
        onClick={props.linkTo}>{props.name}</button>

    </header>
  )
};

export default Header;
