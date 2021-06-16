export const Globo = (props) => {
  const { posicion, cambiaPosicion, incrementaPuntos } = props;
  return (
    <i
      className="fab fa-fly"
      style={posicion}
      onMouseOver={cambiaPosicion}
      onClick={incrementaPuntos}
    ></i>
  );
};
