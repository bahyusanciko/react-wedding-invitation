import React, { useState } from 'react';
import { Gallery } from "react-grid-gallery";
import Title from '../components/Title';

const Moment = ({ data }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (index) => {
    setSelectedImage(data.images[index].src); // Update this to match your image data structure
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section className="moment container d-flex flex-column align-items-center">
      <Title title="Momen Yang Terabadikan" />
      <div className="row mt-4">
        <div className="wrapper" data-aos="zoom-in" data-aos-duration="1500">
          <Gallery 
            images={data.images.map(image => ({...image, className: 'col img-fuild rounded'}))} 
            enableImageSelection={false} 
            onClick={(event, { index }) => handleImageClick(event, index)}
          />
        </div>
      </div>

      {selectedImage && (
        <div className="modal" style={{ display: 'block' }} onClick={closeModal}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <span className="close" style={{ position: 'absolute', right: '10px', fontSize: '30px', color: '#fff', cursor: 'pointer' }} onClick={closeModal}>
                &times;
              </span>
              <img src={selectedImage} alt="selectedImage" className='img-fluid rounded' />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Moment;
