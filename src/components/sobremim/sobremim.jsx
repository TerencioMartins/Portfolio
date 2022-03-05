import React from "react";
import { useContext, useState, useEffect } from "react";
import Context from "../../context/context";
import "./styles.css";
import Typewriter from "typewriter-effect";

export default function SobreMim({ url }) {
  const { style, setStyle, styleSobreMim, setStyleSobreMim, changeStyle } =
    useContext(Context);

  useEffect(() => {
    let el = document.querySelector(".body-sobreMim");
    el.classList.add("fade-in");
  });

  return (
    <div className="body-sobreMim">
      {" "}
      <div className={styleSobreMim}>
        <section className="titulo">
          <div className="textZone">
            <span className="letras">O</span>
            <span className="letras">l</span>
            <span className="letras">á</span>
            <span className="letras">,</span>
            <br />
            <span className="letras">M</span>
            <span className="letras">e</span>
            <span className="letras">u</span>
            <span className="espaco">_</span>

            <span className="letras">n</span>
            <span className="letras">o</span>
            <span className="letras">m</span>
            <span className="letras">e</span>
            <span className="espaco">_</span>
            <span className="letras"> é</span>
            <span className="espaco">_</span>
            <span className="letras"> T</span>
            <span className="letras">e</span>
            <span className="letras">r</span>
            <span className="letras">ê</span>
            <span className="letras">n</span>
            <span className="letras">c</span>
            <span className="letras">i</span>
            <span className="letras">o</span>
            <span className="letras">,</span>
            <br />
            <span className="letras"> W</span>
            <span className="letras">e</span>
            <span className="letras">b</span>
            <span className="espaco">_</span>
            <span className="letras"> d</span>
            <span className="letras">e</span>
            <span className="letras">v</span>
            <span className="letras">e</span>
            <span className="letras">l</span>
            <span className="letras">o</span>
            <span className="letras">p</span>
            <span className="letras">e</span>
            <span className="letras">r</span>
            <br />
          </div>
        </section>
        <section className="descricao-div">
          <div className="descricao">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("Desenvolvedor ")
                  .pauseFor(10)
                  .typeString("front-end ")
                  .pauseFor(50)
                  .typeString("/")
                  .pauseFor(50)
                  .typeString(" React.js")
                  .start();
              }}
              options={{
                delay: 30,
              }}
            />
          </div>
        </section>
      </div>
    </div>
  );
}
