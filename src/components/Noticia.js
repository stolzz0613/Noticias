import React from 'react';
const Noticia = ({ noticia }) => {

    const { url, multimedia, title, abstract } = noticia;

    const imagen = (multimedia) ?
        <img src={multimedia[3].url} alt={title} />
        : null;


    return (
        <div className="col s12 m4 12">
            <div className="card">
                <div className="card-image">
                    <div className="card-image">
                        {imagen}
                    </div>
                    <div className="card-content">
                        <h5>{title}</h5>
                        <span>{abstract}</span>
                    </div>
                    <div className="card-action">
                        <a
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="waves-effect waves-light btn"
                        >Ver Noticia Completa</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Noticia;