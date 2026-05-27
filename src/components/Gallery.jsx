import { useState, useRef, useEffect } from "react";
import artists from "../data/artists";

const Gallery = () => {
  const [activeId, setActiveId] = useState(artists[0].id);
  const videoRef = useRef(null);
  const currentArtist = artists.find((a) => a.id === activeId);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
    }
  }, [activeId]);

  return (
    <div className="gallery-container">
      <header className="gallery-header">
        <h1>Médano Atemporal: Ecos de Sal y Píxeles</h1>
        <p className="intro">
          Cuando la inteligencia artificial se convierte en un pincel de
          restauración emocional, los recuerdos bañados en sal se transforman en
          píxeles eternos. Esta galería digital rinde homenaje a quienes han
          dejado huella en la identidad del Médano.
        </p>
      </header>

      <nav className="tabs">
        {artists.map((artist) => (
          <button
            key={artist.id}
            className={`tab ${artist.id === activeId ? "active" : ""}`}
            onClick={() => setActiveId(artist.id)}
          >
            {artist.nombreArtista}
          </button>
        ))}
      </nav>

      <div className="artwork-viewer">
        <div className="image-frame">
          <img
            src={`/assets/images/${currentArtist.nombreArchivoImagen}`}
            alt={`Retrato de ${currentArtist.nombreArtista}`}
            draggable="false"
            onContextMenu={(e) => e.preventDefault()}
          />
        </div>

        <div className="info-panel">
          <h2>{currentArtist.nombreArtista}</h2>
          <p className="description">{currentArtist.descripcion}</p>

          <div className="video-placeholder">
            <video
              ref={videoRef}
              controls
              disablePictureInPicture
              controlsList="nodownload nofullscreen"
              onContextMenu={(e) => e.preventDefault()}
              src={`/assets/videos/${currentArtist.nombreArchivoVideo}`}
              style={{ width: "100%", borderRadius: "12px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
