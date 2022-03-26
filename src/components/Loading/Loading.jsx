import React from "react";
import etereun from "../../images/icon-ethereum.svg";
import "./styles.css";

const Loading = () => {
  return (
    <div className="container__rotate">
      <img src={etereun} alt="Loading" className="rotate" />
    </div>
  );
};

export default Loading;
