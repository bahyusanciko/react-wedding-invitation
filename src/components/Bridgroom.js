import React from 'react';

const line = require('../assets/images/icons/line.svg').default;

const Bridgroom = ({ data }) => {
  const handleSocmed = (type) => {
    const url = data.socmed[type];
    window.open(url);
  };

  const renderSocmed = (type) => {
    return (
      <div
        className={type}
        data-aos="zoom-in-up"
        data-aos-duration="1500"
        onClick={() => handleSocmed(type)}>
        .
      </div>
    );
  };

  return (
    <div
      className="bridegroom col-md-6 d-flex flex-column justify-content-center align-items-center mb-5"
      data-aos={data.status === 'GROOM' ? 'fade-right' : 'fade-left'}
      data-aos-duration="1500">
      <div className="profil">
        {data?.photo && (<img src={data.photo} alt="foto" />)}
      </div>
      <div className="h2 mt-3">{data.name}</div>
      <div className="status d-flex justify-content-center align-items-center mb-1">
        <div className="line">
          <img src={line} alt="line" />
        </div>
        <div className="h3">{data.status}</div>
        <div className="line">
          <img src={line} alt="line" />
        </div>
      </div>
      {/* <div className="socmed d-flex justify-content-around align-items-center mb-3">
        {renderSocmed('facebook')}
        {renderSocmed('twitter')}
        {renderSocmed('instagram')}
      </div> */}
      <div className="h4 text-center">{data.description}</div>
    </div>
  );
};

export default Bridgroom;
