import React from "react";
import "./styles.css";
import { useEffect } from "react";
import { useContext } from "react";
import Context from "../../context/context";
import { AiOutlineMenu } from "react-icons/ai";
import Typewriter from "typewriter-effect";

export default function Skills() {
  
  useEffect(() => {
    let el = document.querySelector(".body-skills");
    el.classList.add("fade-in");
  });

  const { changeStyle } = useContext(Context);

  return (
    <div className="body-skills">
      <div className="skills">
        <div className="textZone" id="textZone-skills">
          <span className="letras" id="letras-projetos">
            S
          </span>
          <span className="letras" id="letras-projetos">
            k
          </span>
          <span className="letras" id="letras-projetos">
            i
          </span>
          <span className="letras" id="letras-projetos">
            l
          </span>
          <span className="letras" id="letras-projetos">
            l
          </span>
          <span className="letras" id="letras-projetos">
            s
          </span>
          <br></br>
          <section className="descricao-div-skills">
            <div className="descricao-skills">
              <p>Habilidades que aprendi durante a vida <br/> e na jornada como programador.</p>
              {/* <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString("Habilidades ")
                    .pauseFor(10)
                    .typeString("que ")
                    .pauseFor(10)
                    .typeString("aprendi ")
                    .pauseFor(10)
                    .typeString("durante ")
                    .pauseFor(10)
                    .typeString("a vida <br/>")
                    .pauseFor(10)
                    .typeString("e na ")
                    .pauseFor(10)
                    .typeString("jornada ")
                    .pauseFor(10)
                    .typeString("como ")
                    .pauseFor(10)
                    .typeString("programador.")
                    .start();
                }}
                options={{
                  delay: 30,
                }}
              /> */}
            </div>
          </section>
        </div>
        <div className="barras-skills">
          <div className="barras-background">
            <div className="barras" id=""></div>
            <div className="barras" id=""></div>
            <div className="barras" id=""></div>
            <div className="barras" id=""></div>
            <div className="barras" id=""></div>
            <div className="barras" id=""></div>
            <div className="barras" id=""></div>
            <div className="barras" id=""></div>
            <div className="barras" id=""></div>
            <div className="barras" id=""></div>
          </div>
          <div className="barras-status">
            <div className="barras" id="frontEnd">
              <span>Front-End</span>
            </div>
            <div className="barras" id="javascript">
              <span>JavaScript</span>
            </div>
            <div className="barras" id="react">
              <span>React.js</span>
            </div>
            <div className="barras" id="axios">
              <span>Axios</span>
            </div>
            <div className="barras" id="git">
              <span>Git/GitHub</span>
            </div>
            <div className="barras" id="bootstrap">
              <span>Bootstrap/MUI</span>
            </div>
            <div className="barras" id="proAtividade">
              <span>Pró-Atividade</span>
            </div>
            <div className="barras" id="multitarefas">
              <span>Multitarefas</span>
            </div>
            <div className="barras" id="empatia">
              <span>Resiliência</span>
            </div>
            <div className="barras" id="colaboracao">
              <span>Colaboração</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
