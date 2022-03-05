import React from "react";
import Context from "./context";
import { useState, useEffect } from "react";

export default function Provider(props) {
  const [style, setStyle] = useState("vertical-nav");
  const [styleSobreMim, setStyleSobreMim] = useState("sobreMim");
  const [mouseOver, setMouseOver] = useState(false);
  const { mobileOn, setClassOff } = useState("body-skills");
  
  function mobile() {
    if (mobileOn === "vertical-nav-mobile-on") {
      setClassOff("");
    }
  }

  function changeStyle() {
    if (style === "vertical-nav" || style === "vertical-nav-mobile-off") {
      setStyle("vertical-nav-mobile-on");
      setStyleSobreMim("sobreMim-mobile-on");
    } else {
      setStyle("vertical-nav-mobile-off");
      setStyleSobreMim("sobreMim-mobile-off");
    }
  }

  function changeMouseOver() {
    if (mouseOver === false) {
      setMouseOver(true);
    } else {
      setMouseOver(false);
    }
  }

  return (
    <Context.Provider
      value={{
        style,
        setStyle,
        styleSobreMim,
        setStyleSobreMim,
        mouseOver,
        setMouseOver,
        changeMouseOver,
        changeStyle,
        mobileOn,
        setClassOff,
        mobile,
      }}
    >
      {props.children}
    </Context.Provider>
  );
}
