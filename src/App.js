import React from "react";
import "./App.css";
import freeCodeCampLogo from "./imagenes/freecodecamp-logo.png"
import Boton from "./componentes/Boton";
import Contador from "./componentes/Contador";
import {useState} from "react"

function App() {

  const [numClicks, setNumClicks] = useState(0);

  const sumarClick = () => {
    setNumClicks (numClicks + 1);
  }

  const restarClick = () => {
    setNumClicks (numClicks - 1);
  }

  const reiniciarContador = () => {
    setNumClicks (0);
  }

  return (
    <div className="flex flex-wrap items-center justify-center pt-4 font-sans">
      
      <div className="w-full flex items-center justify-center m-[20px]">

        <img 
          className="h-[50px]"
          src={freeCodeCampLogo}
          alt="Logo de FreeCodeCamp" />

      </div>

       <div className="h-[550px] min-w-[600px] flex flex-wrap flex-col items-center justify-center">

        <Contador 
          numClicks={numClicks}/>

      <div className="main">
        <Boton 
          texto="Sumar"
          esBotonDeClick={true}
          lolo={sumarClick}/>

        <Boton
          numClicks={numClicks}
          texto="Restar"
          esBotonDeClick={true}
          lolo={restarClick}/>
      </div>

        <Boton
          texto="Reiniciar"
          esBotonDeClick={false}
          lolo={reiniciarContador}/>

        </div> {/* contenedor principal */}

    </div>
  );
}

export default App;
