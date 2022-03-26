import React from "react";
import useClima from "../../hooks/useClima";
import Formulario from "../Formulario/Formulario";
import Loading from "../Loading/Loading";
import Resultado from "../Resultado/Resultado";
import ResultadoApi from "../ResultadoApi/ResultadoApi";

const AppClima = () => {
  const { resultado, cargando, noResultados } = useClima();

  return (
    <div className="app__climate">
      <Formulario />
      <Resultado>
        {cargando ? (
          <Loading />
        ) : resultado?.name ? (
          <ResultadoApi />
        ) : (
          noResultados && <p>{noResultados}</p>
        )}
      </Resultado>
    </div>
  );
};

export default AppClima;
