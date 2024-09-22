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
                    style={{ maxWidth: '50%', height: 'auto', cursor: 'pointer' }} // Added cursor pointer
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
        <div className="modal" style={{ display: 'block' }} onClick={closeModal}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <span className="close" style={{ position: 'absolute', right: '10px', fontSize: '30px', color: '#fff', cursor: 'pointer' }} onClick={closeModal}>
                &times;
              </span>
              <img src={selectedImage} alt="selectedImage" className='img-thumnail rounded' />
            </div>
          </div>
        </div>
      )}
    </>
     
  );
};

export default Gift;
