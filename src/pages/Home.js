import React, { useEffect, useState } from 'react';
import Snowfall from 'react-snowfall';
import { Howler } from 'howler';
import Header from '../parts/Header';
import Navbar from '../parts/Navbar';
import Couple from '../parts/Couple';
import Events from '../parts/Events';
// import Moment from '../parts/Moment';
import Location from '../parts/Location';
import Gift from '../parts/Gift';
import GreetingCard from '../parts/GreetingCard';

const Home = ({ data }) => {
  const [firstLoad, setFirstLoad] = useState(true);

  useEffect(() => {
    document.addEventListener('visibilitychange', () => {
      Howler.mute(document.visibilityState === 'visible' ? false : true);
    });

    // eslint-disable-next-line
  }, []);

  return (
    <div className="home">
      <Navbar data={data.navbar} />
      <Header data={data.header} firstLoad={firstLoad} setFirstLoad={setFirstLoad} bgm={data.config.bgm} />
      {!firstLoad && (
        <>
          <Couple data={data.couple} />
          <Events data={data.events} />
          {/* <Moment data={data.moment} /> */}
          <Location data={data.location} />
          <Gift data={data.gift} />
          <GreetingCard data={data.events} />
          <Snowfall
            color="#d19ba763"
            snowflakeCount={25}
            speed={[0, 0.5]}
            wind={[0, 0.5]}
            radius={[0, 5]}
            style={{ position: 'fixed', width: '100vw', height: '100vh' }}
          />
        </>
      )}
    </div>
  );
};

export default Home;
