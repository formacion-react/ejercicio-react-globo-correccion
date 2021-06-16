import { useState } from "react";
import { Globo } from "./componentes/Globo";
import { Marcador } from "./componentes/Marcador";

function App() {
  const generaPosicion = () => {
    return {
      top: Math.floor(Math.random() * window.innerHeight),
      left: Math.floor(Math.random() * window.innerWidth),
    };
  };
  const cambiaPosicion = () => {
    setTimeout(() => {
      setPosicion(generaPosicion());
    }, 300);
  };
  const incrementaPuntos = () => {
    setPuntos(puntos + 1);
  };
  const [posicion, setPosicion] = useState(generaPosicion);
  const [puntos, setPuntos] = useState(0);
  return (
    <>
      <Marcador puntos={puntos} />
      <Globo
        posicion={posicion}
        cambiaPosicion={cambiaPosicion}
        incrementaPuntos={incrementaPuntos}
      />
    </>
  );
}

export default App;
