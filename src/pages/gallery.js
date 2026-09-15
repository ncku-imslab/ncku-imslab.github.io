import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import albums from "../data/gallery.json";
import "./gallery.css";

const albumUrl = (album) => `/gallery/${encodeURIComponent(album.id)}`;
const photoUrl = (album, photo) =>
  `${albumUrl(album)}/${encodeURIComponent(photo.id)}`;
const imageUrl = (photo) => `/images/gallery/${encodeURIComponent(photo.file)}`;

const GalleryImage = ({ album, photo, full = false }) => {
  const src = imageUrl(photo);
  const [failedSource, setFailedSource] = useState(null);

  return failedSource === src ? (
    <span className="gallery-image-error" role="status">
      Unable to load photo
    </span>
  ) : (
    <img
      src={src}
      alt={photo.description || `${album.title} — ${photo.id}`}
      loading={full ? "eager" : "lazy"}
      decoding="async"
      onError={() => setFailedSource(src)}
    />
  );
};

const PhotoViewer = ({ album, photoIndex, onClose, onMove }) => {
  const dialogRef = useRef(null);
  const touchRef = useRef(null);
  const photo = album.photos[photoIndex];

  useEffect(() => {
    const dialog = dialogRef.current;
    const previousFocus = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    dialog.showModal();
    document.body.style.overflow = "hidden";

    return () => {
      dialog.close();
      document.body.style.overflow = previousOverflow;
      if (previousFocus?.isConnected)
        previousFocus.focus({ preventScroll: true });
    };
  }, []);

  const handleTouchStart = (event) => {
    touchRef.current =
      event.touches.length === 1
        ? { x: event.touches[0].clientX, y: event.touches[0].clientY }
        : null;
  };
  const handleTouchEnd = (event) => {
    const start = touchRef.current;
    touchRef.current = null;
    if (!start || event.touches.length !== 0) return;

    const dx = event.changedTouches[0].clientX - start.x;
    const dy = event.changedTouches[0].clientY - start.y;
    if (Math.abs(dx) >= 50 && Math.abs(dx) > Math.abs(dy))
      onMove(dx < 0 ? 1 : -1);
  };

  return (
    <dialog
      ref={dialogRef}
      className="gallery-viewer"
      aria-labelledby="gallery-viewer-title"
      onCancel={(event) => {
        event.preventDefault();
        onClose();
      }}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
      onKeyDown={(event) => {
        if (event.altKey || event.ctrlKey || event.metaKey) return;
        if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
          event.preventDefault();
          onMove(event.key === "ArrowRight" ? 1 : -1);
        }
      }}
    >
      <div className="gallery-viewer-content">
        <header className="gallery-viewer-header">
          <h2 id="gallery-viewer-title">{album.title}</h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close photo"
            autoFocus
          >
            ×
          </button>
        </header>
        <div
          className="gallery-full-photo"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onTouchCancel={() => {
            touchRef.current = null;
          }}
        >
          <GalleryImage key={photo.id} album={album} photo={photo} full />
        </div>
        {photo.description && (
          <p className="gallery-viewer-description">{photo.description}</p>
        )}
        <footer className="gallery-viewer-controls">
          <button
            type="button"
            onClick={() => onMove(-1)}
            aria-label="Previous photo"
          >
            ←
          </button>
          <span role="status" aria-live="polite">
            {photoIndex + 1} / {album.photos.length}
          </span>
          <button
            type="button"
            onClick={() => onMove(1)}
            aria-label="Next photo"
          >
            →
          </button>
        </footer>
      </div>
    </dialog>
  );
};

const Gallery = () => {
  const { albumId, photoId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const album = albums.find((entry) => entry.id === albumId);
  const photoIndex =
    album?.photos.findIndex((photo) => photo.id === photoId) ?? -1;

  const openPhoto = (photo) => {
    navigate(
      { pathname: photoUrl(album, photo), search: location.search },
      { state: { galleryViewer: true } },
    );
  };
  const closePhoto = () => {
    if (location.state?.galleryViewer) {
      navigate(-1);
    } else {
      navigate(
        { pathname: albumUrl(album), search: location.search },
        { replace: true },
      );
    }
  };
  const movePhoto = (step) => {
    const next =
      (photoIndex + step + album.photos.length) % album.photos.length;
    navigate(
      {
        pathname: photoUrl(album, album.photos[next]),
        search: location.search,
      },
      {
        replace: true,
        state: location.state,
        flushSync: true,
      },
    );
  };

  if (!albumId) {
    const visibleAlbums = albums.filter((entry) => entry.photos.length > 0);
    const years = [...new Set(visibleAlbums.map((entry) => entry.year))].sort(
      (a, b) => b - a,
    );

    return (
      <main className="gallery-page">
        <h1>Gallery</h1>
        {visibleAlbums.length === 0 ? (
          <p className="gallery-empty">No activity photos yet.</p>
        ) : (
          years.map((year) => (
            <section
              className="gallery-year"
              key={year}
              aria-labelledby={`gallery-year-${year}`}
            >
              <h2 id={`gallery-year-${year}`}>{year}</h2>
              <div className="gallery-grid">
                {visibleAlbums.map((entry) =>
                  entry.year === year ? (
                    <Link
                      key={entry.id}
                      to={albumUrl(entry)}
                      className="gallery-album"
                    >
                      <div className="gallery-thumbnail">
                        <GalleryImage album={entry} photo={entry.photos[0]} />
                      </div>
                      <h3>{entry.title}</h3>
                      <p>Photos: {entry.photos.length}</p>
                    </Link>
                  ) : null,
                )}
              </div>
            </section>
          ))
        )}
      </main>
    );
  }

  return (
    <main className="gallery-page">
      <Link to="/gallery" className="gallery-back">
        ← Back to albums
      </Link>
      <h1>{album ? album.title : "Album not found"}</h1>
      {!album ? (
        <p>This album does not exist or has been removed.</p>
      ) : (
        <>
          <p>
            {album.year} · Photos: {album.photos.length}
          </p>
          {photoId !== undefined && photoIndex < 0 && (
            <p role="alert">
              Photo not found.{" "}
              <Link to={albumUrl(album)} replace>
                Back to this album
              </Link>
            </p>
          )}
          {album.photos.length === 0 && (
            <p className="gallery-empty">This album has no photos yet.</p>
          )}
          <div className="gallery-grid">
            {album.photos.map((photo, index) => (
              <figure className="gallery-item" key={photo.id}>
                <button
                  type="button"
                  className="gallery-thumbnail gallery-photo-button"
                  aria-label={`Open photo ${index + 1}`}
                  onClick={() => openPhoto(photo)}
                >
                  <GalleryImage album={album} photo={photo} />
                </button>
                {photo.description && (
                  <figcaption>{photo.description}</figcaption>
                )}
              </figure>
            ))}
          </div>
          {photoIndex >= 0 && (
            <PhotoViewer
              album={album}
              photoIndex={photoIndex}
              onClose={closePhoto}
              onMove={movePhoto}
            />
          )}
        </>
      )}
    </main>
  );
};

export default Gallery;
