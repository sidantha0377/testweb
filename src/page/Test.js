import React, { useState } from "react";
import "./Test.css";
import Ft from "../assets/fronttest.png";
import Bt from "../assets/back test.png";
import Ht from "../assets/hadtest.png";

export default function Test() {
  const [modalImg, setModalImg] = useState(null);

  const galleryItems = [
    {
      id: 1,
      image: Ft,
      title: "Frontend Testing",
      description: "React testing library",
    },
    {
      id: 2,
      image: Bt,
      title: "Backend testing",
      description: "JUnit, Mokito - Unit testing",
    },
    {
      id: 3,
      image: Ht,
      title: "Backend testing",
      description: "Mqtt Explorer - Test mqtt messages",
    },
  ];

  const openModal = (src) => {
    setModalImg(src);
    document.body.style.overflow = "hidden"; // disable scroll
  };

  const closeModal = () => {
    setModalImg(null);
    document.body.style.overflow = "auto"; // enable scroll
  };

  return (
    <div className="test">
      <div className="iname">Testing</div>

      <div className="gallery-container">
        {galleryItems.map((item, index) => (
          <div
            key={item.id}
            className={`gallery-item ${index % 2 === 1 ? "reverse" : ""}`}
          >
            <div
              className="gallery-image-wrapper"
              onClick={() => openModal(item.image)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && openModal(item.image)}
              style={{ cursor: "pointer" }}
            >
              <img
                src={item.image}
                alt={item.title}
                className="gallery-image"
              />
            </div>

            <div className="gallery-text">
              <h2 className="gallery-title">{item.title}</h2>
              <p className="gallery-description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {modalImg && (
        <div className="modal-overlay" onClick={closeModal}>
          <img
            src={modalImg}
            alt="Zoomed"
            className="modal-image"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="modal-close-btn"
            onClick={closeModal}
            aria-label="Close zoomed image"
          >
            &times;
          </button>
        </div>
      )}
    </div>
  );
}
