import React, { Fragment, useState, useEffect } from 'react';
import Header from "./components/Header";
import Formulario from "./components/Formulario";

function App() {

  const [categoria, setCategoria] = useState("")

  useEffect(() => {
    const consultarAPI = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=co&apiKey=ae3cf9d810c2449d8b6858cb05fe015b`;
      const response = await fetch(url);
      const noticias = await response.json();

      console.log(noticias);
    }
    consultarAPI();
  }, [categoria]);

  return (
    <Fragment>
      <Header
        titulo="Buscador de Noticias"
      />
      <div className="container white">
        <Formulario
          setCategoria={setCategoria}
        />
      </div>
    </Fragment>
  );
}

export default App;
