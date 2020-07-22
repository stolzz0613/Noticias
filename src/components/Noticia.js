import React from 'react';


const Noticia = ({ noticia }) => {

    const { url, multimedia, title, abstract } = noticia;

    const imagen = (multimedia) ?
        <img className="activator" src={multimedia[3].url} alt={title} />
        : null;


    return (
        <div className="size col s12 m4 10">
            <div className="card medium  teal accent-1 hoverable">
                <div className="card-image">
                    {imagen}
                </div>
                <div className="card-content">
                    <h6><b>{title.substr(0, 40)}...</b></h6>
                    <p><i>{abstract}</i></p>
                </div>
                <div className="card-action" style={{ textAlign: "center" }}>
                    <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="waves-effect waves-light deep-orange lighten-2 btn"
                    >Ver Noticia Completa</a>
                </div>
            </div>
        </div>
    );
}

export default Noticia;