import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Title from '../components/Title';
import Form from '../components/Form';
import Messagesbox from '../components/MessagesBox';

import { data as datas } from '../data';

const GreetingCard = ({ data }) => {
  const [messages, setMessages] = useState([]);

  const fetchMessages = async () => {
    const res = await axios.get(
      process.env.REACT_APP_API_ENDPOINT +
        `/api/wedding-messages?filters[event][$eq]=${datas['en'].config.name}&sort[0]=createdAt%3Adesc&pagination[limit]=100`
    );
    setMessages(res.data.data);
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  return (
    <section className="greeting-card container" data-aos="zoom-in" data-aos-duration="1500">
      <Title title="Greeting Card" />
      <Form fetchMessages={fetchMessages} />
      <Messagesbox messages={messages} />
    </section>
  );
};

export default GreetingCard;
