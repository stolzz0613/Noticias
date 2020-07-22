import React, { Fragment, useState, useEffect } from 'react';
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import ListadoNoticias from "./components/ListadoNoticias";

function App() {

  const [categoria, setCategoria] = useState("");
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    if (categoria) {
      const consultarAPI = async () => {
        const url = `https://api.nytimes.com/svc/topstories/v2/${categoria}.json?api-key=tO6SUAKDEYUsWg6atvEBbfU1mLndKIdO`
        const response = await fetch(url);
        const noticias = await response.json();
        setNoticias(noticias.results);
      }
      consultarAPI()
    }
  }, [categoria]);

  return (
    <Fragment>
      <Header
        titulo="News look up"
      />
      <div className="container white">
        <Formulario
          setCategoria={setCategoria}
        />
        <ListadoNoticias
          noticias={noticias}
        />
      </div>
    </Fragment>
  );
}

export default App;
