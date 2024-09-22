import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Title from '../components/Title';
import Form from '../components/Form';
import Messagesbox from '../components/MessagesBox';

const GreetingCard = ({ data }) => {
  const [messages, setMessages] = useState([]);

  const fetchMessages = async () => {
    const res = await axios.get(
      process.env.REACT_APP_API_ENDPOINT +
        `/api/message`
    );
    setMessages(res.data.data);
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  return (
    <>
      <section className="container" id="greeting-card" data-aos="zoom-in" data-aos-duration="1500">
        <Title title="Kartu Ucapan" />
        <Form fetchMessages={fetchMessages} />
        <Messagesbox messages={messages} />
      </section>
      <footer className="footer text-center p-0 m-0">
        <p> {new Date().getFullYear()} &copy; by Bahyu Sanciko</p>
      </footer>
    </>
  );
};

export default GreetingCard;
