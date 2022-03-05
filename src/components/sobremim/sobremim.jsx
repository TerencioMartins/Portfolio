import React from "react";
import { useContext, useState, useEffect } from "react";
import Context from "../../context/context";
import "./styles.css";
import Typewriter from "typewriter-effect";

export default function SobreMim({ url }) {
  const { style, setStyle, styleSobreMim, setStyleSobreMim, changeStyle } =
    useContext(Context);
  const [faderight, setFaderight] = useState("");

  useEffect(() => {
    let el = document.querySelector(".body-sobreMim");
    el.classList.add("fade-in");
  });

  function sobreMimTexto() {
    if (faderight === "" || faderight === "fadeoutright") {
      setFaderight("faderight");
    } else if (faderight === "faderight") {
      setFaderight("fadeoutright");
    }
  }

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
            <p className="desenvolvedor">Desenvolvedor front-end / React.js</p>
            <p onClick={sobreMimTexto} className="sabermais">
              Saber mais ➡
            </p>  
          </div>
        </section>
        <div className={`sobremimcard1 ${faderight}`}>
        <div className={`sobremimcard2 ${faderight}`}>
          <p className={`sobreMimTexto ${faderight}`}>
            <i>&emsp;&emsp;&emsp;&emsp;&emsp;Apaixonado por:</i> <br />
            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;🎮 𝙂𝙖𝙢𝙚𝙨 <br />
            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;🎌 𝘼𝙣𝙞𝙢𝙚𝙨 <br />
            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;💻 𝘾𝙤𝙙𝙞𝙣𝙜 <br />
            <br/>
            Escolhi desenvolvimento pois além de incrível, é muito animador
            pensar na possibilidade de impactar inúmeras vidas com o que faço.
            Atualmente crio meus próprios projetos utilizando várias ferramentas
            mas principalmente <i><b>React</b></i>.
          </p>
        </div>
        </div>
      </div>
    </div>
  );
}
