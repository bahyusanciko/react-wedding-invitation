import React from 'react';
import Title from '../components/Title';

const Gift = ({ data }) => {
  return (
    <section
      className="container-fluid d-flex flex-column align-items-center"
      data-aos="zoom-in"
      data-aos-duration="1500">
      <Title title="Kado" />
      <p>{data.title}</p>
      <div className="row mt-3">
        {data.images.map((image, index) => (
          <div className="col-6" key={index}>
            <div className="mt-3">
              <div className="d-flex justify-content-center">
                <img src={image.src} className='img-fluid' alt={image.title} style={{ maxWidth: '100%', height: 'auto' }} />
              </div>
              <p className="text-center">{image.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gift;
