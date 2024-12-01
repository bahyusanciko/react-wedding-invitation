import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { getUrlParam } from '../utils/helper';

const Form = ({ fetchMessages, couple }) => {
  const [loader, setLoader] = useState(false);
  const receiver = getUrlParam('to') ? decodeURIComponent(decodeURIComponent(getUrlParam('to'))) : '';

  const onSubmit = async (e) => {
    setLoader(true);

    const resp = await axios.post(process.env.REACT_APP_API_ENDPOINT + '/api/message', {
      name: e.name,
      message: e.message,
      couple: couple
    });



    if (resp.status === 200) {
      fetchMessages();
      reset();
    } else {
    }

    setLoader(false);
  };

  const { register, handleSubmit, reset } = useForm();

  return (
    <div className="form row d-flex justify-content-center align-items-center px-3 mt-3">
      <div className="col-md-8 d-flex flex-column justify-content-center align-items-center mb-5">
        <form className="w-100 d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group mb-3">
            <label>Nama</label>
            <input className="form-control" {...register('name', { required: true, maxLength: 100 , value : receiver })} placeholder="Ketik nama Anda di sini" />
          </div>
          <div className="form-group mb-3">
            <label>Pesan</label>
            <textarea className="form-control" {...register('message', { required: true })} placeholder="Ketik pesan Anda di sini" />
          </div>
          <button type="submit" className="w-100 btn btn-secondary  align-self-end">
            {loader ? 'Memuat...' : 'Kirim Pesan'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
