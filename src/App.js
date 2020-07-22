import React, { Fragment, useState, useEffect } from 'react';
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import ListadoNoticias from "./components/ListadoNoticias";
import Spinner from './components/Spinner';

function App() {

  const [categoria, setCategoria] = useState("");
  const [noticias, setNoticias] = useState([]);
  const [cargando, setCargando] = useState(false);

  useEffect(() => {
    if (categoria) {
      const consultarAPI = async () => {
        const url = `https://api.nytimes.com/svc/topstories/v2/${categoria}.json?api-key=tO6SUAKDEYUsWg6atvEBbfU1mLndKIdO`
        const response = await fetch(url);
        const noticias = await response.json();
        setCargando(true);
        setTimeout(() => {
          setCargando(false);
          setNoticias(noticias.results);
        }, 2000);
      }
      consultarAPI()
    }
  }, [categoria]);

  const componente = (cargando) ?
    <Spinner />
    : <ListadoNoticias noticias={noticias} />
  return (
    <Fragment>
      <Header
        titulo="News look up"
      />
      <div className="container">
        <Formulario
          setCategoria={setCategoria}
        />
        {componente}
      </div>
    </Fragment>
  );
}

export default App;
