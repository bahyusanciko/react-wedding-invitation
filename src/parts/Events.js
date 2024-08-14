import React from 'react';

import Title from '../components/Title';
import Card from '../components/Card';

const Events = ({ data }) => {
  return (
    <section className="events container" id="events">
      <Title title="Kapan & Dimana" />
      <div className="row mt-5">
        <Card data={data.ceremony} />
        <Card data={data.reception} />
      </div>
    </section>
  );
};

export default Events;