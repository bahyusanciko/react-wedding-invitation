import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { addGA } from '../utils/helper';
import { data } from '../data';

const Form = ({ fetchMessages }) => {
  const [loader, setLoader] = useState(false);

  const onSubmit = async (e) => {
    setLoader(true);
    addGA('post-message', 'click');

    const payload = {
      data: {
        event: data['en'].config.name,
        name: e.name,
        message: e.message,
        // attend: e.attend,
      },
    };

    const resp = await axios.post(process.env.REACT_APP_API_ENDPOINT + '/api/wedding-messages', payload);

    if (resp.status === 200) {
      fetchMessages();
      addGA('post-message-success', 'show');
      reset();
    } else {
      addGA('post-message-failed', 'show');
      console.log(resp);
    }

    setLoader(false);
  };

  const { register, handleSubmit, reset } = useForm();

  return (
    <div className="form row d-flex justify-content-center align-items-center px-3 mt-3">
      <div className="col-md-8 d-flex flex-column justify-content-center align-items-center mb-5">
        <form className="w-100 d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group mb-3">
            <label>Name</label>
            <input className="form-control" {...register('name', { required: true, maxLength: 100 })} placeholder="Type your name here" />
          </div>
          <div className="form-group mb-3">
            <label>Message</label>
            <textarea className="form-control" {...register('message', { required: true, maxLength: 500 })} placeholder="Type your message here" />
          </div>
          {/* <label>Kehadiran</label>
          <div className="form-group">
            <div className="form-check form-check-inline">
              <input {...register('attend', { required: true })} type="radio" value={true} />
              <label className="form-check-label">Ya</label>
            </div>
            <div className="form-check form-check-inline">
              <input {...register('attend', { required: true })} type="radio" value={false} />
              <label className="form-check-label">Tidak</label>
            </div>
          </div> */}
          <button type="submit" className="w-100 btn btn-secondary  align-self-end">
            {loader ? 'Loading...' : 'Send Messages'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
