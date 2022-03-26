import React from "react";
import "./styles.css";
import equilibrium from "../../images/image-equilibrium.jpg";
import { useState } from "react";
import useClima from "../../hooks/useClima";

const Formulario = () => {
  const [alerta, setAlerta] = useState("");

  const { busqueda, datosBusqueda, consultarClima } = useClima();

  const { ciudad, pais } = busqueda;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (Object.values(busqueda).includes("")) {
      setAlerta("Todos los campos son obligatorios");
      return;
    }

    setAlerta("");
    consultarClima(busqueda);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="form__main">
        <div className="section__main__figure">
          <img src={equilibrium} className="section__main__img" />
        </div>
        <div className="section__texts">
          <h1>Buscador de Clima</h1>
        </div>
        <div className="section__inputs">
          <div>
            <input
              type="text"
              name="ciudad"
              placeholder="Ingrese Ciudad"
              className="city__input"
              value={ciudad}
              onChange={datosBusqueda}
            />
          </div>
          <div>
            <select
              name="pais"
              className="country__select"
              value={pais}
              onChange={datosBusqueda}
            >
              <option value="">Seleccione País</option>
              <option value="US">Estados Unidos</option>
              <option value="MX">México</option>
              <option value="AR">Argentina</option>
              <option value="CO">Colombia</option>
              <option value="CR">Costa Rica</option>
              <option value="ES">España</option>
              <option value="PE">Perú</option>
            </select>
          </div>

          <input type="submit" value="Consultar Clima" className="btn1" />
          {alerta && <p className="alert">{alerta}</p>}
        </div>
      </div>
    </form>
  );
};

export default Formulario;
