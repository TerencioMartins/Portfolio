import React from "react";
import "./styles.css";
import projeto1 from "../../assets/projeto1.png";
import projeto2 from "../../assets/projeto2.png";
import projeto3 from "../../assets/projeto3.png";
import { useContext } from "react";
import Context from "../../context/context";
import { useEffect } from "react";
import Typewriter from 'typewriter-effect'

export default function OutrosProjetos() {
  const { mouseOver, setMouseOver, changeMouseOver } = useContext(Context);

  useEffect(() => {
    let el = document.querySelector(".body-outrosProjetos");
    el.classList.add("fade-in");
  });

  return (
    <div className="body-outrosProjetos">
      <div className="textZone" id="textZone-projetos">
        <span className="letras" id="letras-projetos">
          P
        </span>
        <span className="letras" id="letras-projetos">
          o
        </span>
        <span className="letras" id="letras-projetos">
          r
        </span>
        <span className="letras" id="letras-projetos">
          t
        </span>
        <span className="letras" id="letras-projetos">
          i
        </span>
        <span className="letras" id="letras-projetos">
          f
        </span>
        <span className="letras" id="letras-projetos">
          ó
        </span>
        <span className="letras" id="letras-projetos">
          l
        </span>
        <span className="letras" id="letras-projetos">
          i
        </span>
        <span className="letras" id="letras-projetos">
          o
        </span>
        <section className="descricao-div-projetos">
          <div className="descricao-projetos">
            <p>Projetos que desenvolvi em JavaScript <br/> e em React</p>
            {/* <Typewriter
          onInit={(typewriter) => {
            typewriter
            .typeString("Projetos ")
            .pauseFor(10)
            .typeString("que ")
            .pauseFor(10)
            .typeString("desenvolvi ")
            .pauseFor(10)
            .typeString("em JavaScript <br/> ")
            .pauseFor(100)
            .typeString("e em React.")
            .start();
          }}
          options={{
            delay:30,
          }}
          /> */}
          </div>
        </section>
      </div>
      <div className="container">
        <div className="card">
          <a
            href="https://terenciomartins.github.io/-Outdated-Portfolio-jsvanilla"
            target="_blank"
          >
            <img src={projeto1} />
          </a>
        </div>
        <div className="card">
          <a href="https://terenciomartins.github.io/Pokedex/" target="_blank">
            <img src={projeto2} />
          </a>
        </div>
        <div className="card">
          <a
            href="https://terenciomartins.github.io/MayAnimeList/"
            target="_blank"
          >
            <img src={projeto3} />
          </a>
        </div>
      </div>
    </div>
  );
}
