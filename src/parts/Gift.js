import React, { useState } from 'react';
import Title from '../components/Title';

const Gift = ({ data }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (src) => {
    setSelectedImage(src);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <section
        className="container-fluid d-flex flex-column align-items-center"
        data-aos="zoom-in"
        data-aos-duration="1500"
      >
        <Title title="Kado" />
        <h3 className="text-wrap text-center" style={{
          fontSize: '1rem',
          color: '#d19ba7',
          margin: '0 2.5%'
        }}>
          {data.title}
        </h3>
        <div className="row mt-3">
          {data.images.map((image, index) => (
            <div className="col-6" key={index}>
              <div className="mt-3">
                <div className="d-flex justify-content-center">
                  <img
                    src={image.src}
                    className="img-fuild rounded"
                    onClick={() => handleImageClick(image.src)}
                    alt={image.title}
                    style={{ maxWidth: '80%', height: 'auto', cursor: 'pointer' }} // Added cursor pointer
                  />
                </div>
                <p className="text-center" style={{
                  fontSize: '1rem',
                  color: '#d19ba7',
                  margin: '0 2.5%'
                }}>
                  {image.title}
                </p>
              </div>
            </div>
          ))}
        </div>

      </section>
       {selectedImage && (
        <div 
          style={{
            position: 'fixed',
            zIndex: 1000,
            left: 0,
            top: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }} 
          onClick={closeModal}
        >
          <div 
            style={{
              backgroundColor: '#fefefe',
              padding: '1px',
              borderRadius: '8px',
              textAlign: 'center',
              maxWidth: '90%', // Ensure it fits within the screen
              maxHeight: '90%', // Ensure it fits within the screen
              position: 'relative',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <span 
              style={{
                position: 'absolute',
                right: '10px',
                top: '10px', // Ensure the close button is at the top
                fontSize: '30px',
                color: '#fff',
                cursor: 'pointer',
              }} 
              onClick={closeModal}
            >
              &times;
            </span>
            <img 
              src={selectedImage} 
              alt="Selected" 
              className="img-fuild rounded"
              style={{
                maxWidth: '100%',
                maxHeight: '100%',
                objectFit: 'contain',
              }}
            />
          </div>
        </div>
      )}
    </>
     
  );
};

export default Gift;
