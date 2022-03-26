import React from "react";
import "./styles.css";
import useClima from "../../hooks/useClima";

const ResultadoApi = () => {
  const { resultado } = useClima();

  const { name, main } = resultado;
  const kelvin = 273;

  return (
    <div>
      <h1 className="resulTApi__title">El clima de {name} es: </h1>

      <div className="resulTApi__paragraph">
        <p>
          Temperatura Acutal: <span>{parseInt(main.temp - kelvin)} C°</span>
        </p>
        <p>
          Temperatura Minima: <span>{parseInt(main.temp_min - kelvin)} C°</span>
        </p>
        <p>
          Temperatura Maxima: <span>{parseInt(main.temp_max - kelvin)} C°</span>
        </p>
      </div>
    </div>
  );
};

export default ResultadoApi;
