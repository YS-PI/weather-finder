import React from "react";
import "./styles.css";
import equilibrium from "../../images/image-equilibrium.jpg";

const Resultado = ({ children }) => {
  return (
    <form>
      <div className="result__main">
        <div className="result__main__figure">
          <img src={equilibrium} className="result__main__img" />
        </div>
        {children}
      </div>
    </form>
  );
};

export default Resultado;
