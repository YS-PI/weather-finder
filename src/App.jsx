import React from "react";
import AppClima from "./components/AppClima/AppClima";
import { ClimaProvider } from "./context/ClimaProvider";

const App = () => {
  return (
    <ClimaProvider>
      <AppClima />
    </ClimaProvider>
  );
};

export default App;
