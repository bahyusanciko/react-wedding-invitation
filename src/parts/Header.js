import React from 'react';
import Slider from 'react-slick';
import useScrollPosition from '@react-hook/window-scroll';

import Counter from '../components/Counter';
import { audio, getUrlParam } from '../utils/helper';

const separator = require('../assets/images/icons/separator.svg').default;

const Header = ({ data, firstLoad, setFirstLoad, bgm }) => {
  const renderBackground = () => {
    const settings = {
      fade: true,
      speed: 2000,
      autoplay: true,
      autoplaySpeed: 5000,
      infinite: true,
      arrows: false,
    };

    const isPortrait = window.innerHeight > window.innerWidth;
    const backgrounds = isPortrait ? data.bgImagePortrait : data.bgImageLandscape;

    return (
      <div className="container-fluid">
        <Slider {...settings}>
          {backgrounds.map((ele, i) => (
            <div key={i} className="background">
              {firstLoad && <div className="dark"></div>}
              <img src={ele} alt={`bg-${i}`} />
            </div>
          ))}
        </Slider>
      </div>
    );
  };

  const renderContent = () => {
    return (
      <div
        className="content container-fluid d-flex flex-column justify-content-center align-items-center"
        data-aos="zoom-in-up"
        data-aos-duration="1500">
        <div className="row">
          <div className="col text-center">
            <div className="name mb-3">{data.bridegroom}</div>
            <div className="desc">{data.desc}</div>
            <div className="separator">
              <img src={separator} alt="separator" />
            </div>
            <div className="date h4 mb-5">{data.date}</div>
            {firstLoad ? (
              <div className="card d-flex flex-column justify-content-center align-items-center px-5 py-4">
                <div className="to">{data.line1}</div>
                <h1 className="receiver">{receiver}</h1>
                <div className="to">{data.line2}</div>
                <div
                  className="btn btn-secondary btn-lg mt-3"
                  onClick={() => {
                    audio(bgm, { loop: true, volume: 0.25 }).play();
                    setFirstLoad(false);
                  }}>
                  {data.button}
                </div>
              </div>
            ) : (
              <Counter data={data} />
            )}
          </div>
        </div>
        {!firstLoad && scrollY < 200 && (
          <div className="animated infinite bounce slow arrow" onClick={() => {
            const nextSection = document.getElementById('couple');
            if (nextSection) {
              nextSection.scrollIntoView({ behavior: 'smooth' });
            }
          }}>
            <img src={require('../assets/images/icons/arrow.png')} alt="arrow" />
          </div>
        )}
      </div>
    );
  };

  const scrollY = useScrollPosition(60);
  const receiver = getUrlParam('to') ? decodeURIComponent(decodeURIComponent(getUrlParam('to'))) : '';

  return (
    <header id="header">
      {renderBackground()}
      {renderContent()}
      <div className="overlay"></div>
    </header>
  );
};

export default Header;
