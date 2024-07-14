import "./CuartoVideo.css";
import { useState, useEffect } from "react";

const CuartoVideo = (props) => {
  const { datosFormulario, idVideo } = props; 
  const ultimoDato = datosFormulario[datosFormulario.length - 1];
  console.log(ultimoDato.video);

  let urlVideo = "";


  useEffect(() => {
  
    urlVideo = `https://www.youtube.com/embed/${idVideo}`;

  
    const iframe = document.querySelector("iframe");
    if (iframe) {
      iframe.src = urlVideo;
    }
  }, [idVideo]);

  return (
    <section className="cuarto-video">
      <div className="detalles-video">
        <div className="descripcion-video">
          <h1>Título: {ultimoDato.titulo}</h1>
          <h2>Categoría: {ultimoDato.categoria}</h2>
          <h2>Descripción: {ultimoDato.descripcion}</h2>
        </div>

        <img src={ultimoDato.imagen} alt="Equipo Front End" />
      </div>

      <div className="video-principal">
        {/* Iframe para mostrar el video */}
        <iframe
          width="900"
          height="350"
          src={urlVideo} // Utiliza la URL construida con idVideo
          title="Front-end vs. Back-end: ¡Descubre el lado perfecto para ti! #LuchaDev"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
    </section>
  );
};

export default CuartoVideo;


