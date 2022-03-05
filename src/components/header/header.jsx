import React, { useRef } from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import logoIcon from "../../assets/logoIcon.png";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { AiOutlineMenu } from "react-icons/ai";
import { useState, useEffect } from "react";
import { useContext } from "react";
import Context from "../../context/context";
import Curriculo from "../../assets/curriculo.pdf";
import lofi from "../../assets/lofi.mp3";
import { BsMusicNoteBeamed } from "react-icons/bs";

export default function Header() {
  const { style, setStyle, changeStyle } = useContext(Context);
  const [isPlaying, setPlaying] = useState(false);
  const audioRef = useRef();

  const play = () => {
    const audio = audioRef.current;
    if (isPlaying === false) {
      audio.play();
      setPlaying(true);
    }
    if (isPlaying === true) {
      audio.pause();
      setPlaying(false);
    }
  };

  return (
    <>
      <menu className="vertical-menu">
        <div className="top-header">
          <img className="logoIcon" src={logoIcon} alt="logoicon" />
          <p>
            <b>Terencio</b>
          </p>
          <p id="martins">Martins</p>
          <span id="desenvolvedor-web">Desenvolvedor Web</span>
        </div>
        <nav className={style}>
          <a href={Curriculo} target="_blank" className="curriculo">
            {" "}
            Curriculo 🤍{" "}
          </a>

          <div className="secoes">
            <Link to="/" id="first-nav">
              Quem sou eu?
            </Link>
            <Link to="/projetos">Outros Projetos</Link>
            <Link to="/skills">Skills</Link>
          </div>
          <ul className="footer">
            <li id="linkedin">
              <span>
                <a
                  href="https://www.linkedin.com/in/terencio-martins/"
                  target="_blank"
                  id="contact"
                >
                  <FaLinkedinIn size={25} />
                </a>
              </span>
            </li>
            <li id="github">
              <span>
                <a
                  href="https://github.com/TerencioMartins"
                  target="_blank"
                  id="contact"
                >
                  <FaGithub size={25} />
                </a>
              </span>
            </li>
            <li id="gmail">
              <span>
                <a
                  href="mailto:zerofirty0@gmail.com"
                  target="_blank"
                  id="contact"
                >
                  <SiGmail size={25} />
                </a>
              </span>
            </li>
          </ul>
        </nav>
        <div onClick={changeStyle} className="mobile-menu">
          <AiOutlineMenu size={50} />
        </div>
      </menu>
      <audio id="player" loop ref={audioRef}>
        <source src={lofi} type="audio/mp3" />
      </audio>
      <div className="players">
        <p onClick={play} className="play">
          <BsMusicNoteBeamed size={40} className="play" />
        </p>
      </div>
    </>
  );
}
