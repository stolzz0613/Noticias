import React from 'react';
const Noticia = ({ noticia }) => {

    const { url, multimedia, title, abstract } = noticia;

    console.log(noticia)
    return (
        <div className="col s12 m4 12">
            <div className="card">
                <div className="card-image">
                    <div className="card-image">
                        <img src={multimedia[0].url} alt={title} />
                    </div>
                    <div className="card-content">
                        <h6>{title}</h6>
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