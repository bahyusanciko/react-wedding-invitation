import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Home from './pages/Home';
import Loader from './pages/Loader';

import { data } from './data';

const App = () => {
  const [loader, setLoader] = useState(true);

  const lang = 'en';
  const data_lang = data[lang];

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 2000);

    AOS.init({ delay: 250 });
    AOS.refresh();

    // eslint-disable-next-line
  }, []);

  return <div className="app">{loader ? <Loader /> : <Home data={data_lang} />}</div>;
};

export default App;
