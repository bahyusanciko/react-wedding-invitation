import React from 'react';

import Title from '../components/Title';
import Bridgroom from '../components/Bridgroom';

const Couple = ({ data }) => {
  return (
    <section className="couple container" id="couple">
      <Title title={data.title} />
      <div className="row mt-4">
        <Bridgroom data={data.groom} />
        <Bridgroom data={data.bride} />
      </div>
    </section>
  );
};

export default Couple;
