import React from 'react';

const iconReception = require('../assets/images/icons/reception.svg');

const Card = ({ data }) => {
  return (
    <div
      className="card container-fluid d-flex flex-column align-items-center"
      data-aos-duration="1500">
      <div className="place d-flex justify-content-center align-items-center mb-5">
        <img src={data.foto} alt="foto" />
        <div className="circle d-flex justify-content-center align-items-center">
          <img
            src={iconReception}
            alt="icon"
            data-aos="flip-left"
            data-aos-duration="1500"
            data-aos-delay="1000"
          />
        </div>
      </div>
      <div className="h3 title mb-3">{data.title}</div>
      <div className="h5 date">{data.date}</div>
      <div className="h5 time mb-3">{data.time}</div>
      <div className="h5 address">{data.address.line1}</div>
      <div className="h5 address">{data.address.line2}</div>
      <div className="h5 address">{data.address.line3}</div>
    </div>
  );
};

export default Card;
