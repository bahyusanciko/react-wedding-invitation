import React from 'react';
import Title from '../components/Title';

const Location = ({ data }) => {
  return (
    <section
      className="location container d-flex flex-column align-items-center"
      data-aos="zoom-in"
      data-aos-duration="1500" id='location'>
      <Title title="Lokasi" />
      <div className="row mt-3">
        <div className="col">
          <iframe
            title="asi"
            src={data.maps}
            frameBorder="0"
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          />
        </div>
      </div>
    </section>
  );
};

export default Location;
