import React from 'react';
import Gallery from 'react-grid-gallery';

import Title from '../components/Title';

const Moment = ({ data }) => {
  return (
    <section className="moment container d-flex flex-column align-items-center">
      <Title title="Captured Moments" />
      <div className="row mt-4">
        <div className="wrapper" data-aos="zoom-in" data-aos-duration="1500">
          <Gallery images={data.images} enableImageSelection={false} />
        </div>
      </div>
    </section>
  );
};

export default Moment;
