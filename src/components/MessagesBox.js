import React from 'react';
import { format } from 'date-fns';

const Messagesbox = ({ messages }) => {
  return (
    <div className="msg-box row d-flex justify-content-center px-3 mt-3 mb-5">
      <div className="msg-box-wrapper col-md-8 d-flex flex-column align-items-center ">
        {messages.map((message) => (
          <div key={message.id} className="row w-100 mb-3">
            <div className="col rounded bg-white d-flex py-2">
              <div className="avatar rounded-circle d-flex justify-content-center align-items-center mr-2">
                {message.name[0]}
              </div>
              <div className="w-100 d-flex flex-column">
                <div className=" d-flex justify-content-between">
                  <div className="name">{message.name}</div>
                  <div className="date d-flex justify-content-end align-items-center">
                    {format(new Date(message.createdAt), 'dd-MM-Y  HH:mm:ss')}
                  </div>
                </div>
                <div className="msg">
                  <div>{message.message}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Messagesbox;
