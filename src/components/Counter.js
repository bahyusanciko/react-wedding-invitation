import React from 'react';
import Countdown, { zeroPad } from 'react-countdown';

const Counter = ({ data }) => {
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return <div className="h2">{data.ongoing}</div>;
    } else {
      return (
        <>
          {Square(zeroPad(days), 'days')}
          {Square(zeroPad(hours), 'hours')}
          {Square(zeroPad(minutes), 'minutes')}
          {Square(zeroPad(seconds), 'seconds')}
        </>
      );
    }
  };

  const Square = (time, text) => {
    const plurality = (text) => {
      return time > 1 ? text : text.slice(0, -1);
    };

    return (
      <div className="box d-flex flex-column justify-content-center align-items-center">
        <div className="times">{time}</div>
        <div className="text">{plurality(text)}</div>
      </div>
    );
  };

  return (
    <div className="counter d-flex justify-content-around align-items-center">
      <Countdown
        date={data.timestamp}
        daysInHours={true}
        renderer={renderer}
        zeroPadTime={2}
      />
    </div>
  );
};

export default Counter;
