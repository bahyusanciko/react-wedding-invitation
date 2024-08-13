import { Howl } from 'howler';

export const paralelNumber = (value, dataLength) => {
  if (value + 1 < dataLength) {
    return value + 1;
  } else {
    return 0;
  }
};

export const getUrlParam = (pa) => {
  let url = window.location.href.replace(/#+.*$/),
    params = url.substring(url.indexOf('?') + 1, url.length).split('&'),
    param = {};

  for (let i = 0; i < params.length; i++) {
    let pos = params[i].indexOf('='),
      key = params[i].substring(0, pos),
      val = params[i].substring(pos + 1);

    param[key] = val;
  }

  return typeof param[pa] === 'undefined' ? false : param[pa];
};

export const audio = (path, option) => {
  const sound = new Howl({
    src: [path],
    ...option,
  });

  return sound;
};

export const initGA = (to, dataLog = 'wedding-invitation') => {
  window.gtag('config', process.env.REACT_APP_GA, {
    page_title: dataLog,
    page_path: '/index.html',
    to: to,
  });
};

export const addGA = (event, status) => {
  const report = {
    event_label: status,
    ts: parseInt(Date.parse(new Date()) / 1000),
  };
  window.gtag('event', event, report);
};
