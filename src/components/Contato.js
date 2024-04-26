/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable max-len */
/* eslint-disable react/jsx-max-depth */
/* eslint-disable no-magic-numbers */
import React, { useState } from 'react';
import { Alert, Backdrop, CircularProgress,
  Stack, TextField } from '@mui/material';
import emailjs from '@emailjs/browser';
import '../App.css';

export default function Contato() {
  const [open, setOpen] = useState(false);
  const [msgEnvio, setMsgEnvio] = useState(false);
  const [info, setInfo] = useState({
    nome: '',
    email: '',
    telefone: '',
    mensagem: '',
  });

  const onGenericChange = (e) => {
    const { target: { value, name } } = e;
    setInfo({ ...info, [name]: value });
    setMsgEnvio(false);
  };

  const enviar = async () => {
    setOpen(true);
    const templeteParams = {
      name: info.nome,
      message: info.mensagem,
      telefone: info.telefone,
      email: info.email,
    };
    const response = await emailjs.send(
      'service_b73x98w',
      'template_w3iekgk',
      templeteParams,
      'de8LuDniyoi1QNIpw',
    );
    console.log(response);
    if (response.status === 200) {
      setInfo({
        nome: '',
        email: '',
        telefone: '',
        mensagem: '',
      });
    }
    setOpen(false);
    setMsgEnvio(true);
  };

  return (
    <div
      className="flex flex-col justify-center items center text-white rounded-2xl lg:w-[700px] w-[90%]"
    >
      <Backdrop
        sx={ { color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 } }
        open={ open }
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <div className="flex flex-col items-center">
        <div
          className="mb-3 flex flex-col md:w-[600px] w-[100%]
          md:rounded-3xl items-center
        text-center"
        >
          <div
            className="w-full items-center flex flex-col mt-4 h-[350px]"
          >
            { msgEnvio ? (
              <div className="md:w-[600px] w-[90%]">
                <Stack sx={ { width: '100%' } } spacing={ 2 }>
                  <Alert>O formulário foi enviado com sucesso!</Alert>
                </Stack>
              </div>
            ) : ''}
            <div className="my-4 w-full">
              <TextField
                style={ { backgroundColor: 'white' } }
                onChange={ onGenericChange }
                value={ info.nome }
                name="nome"
                className="m-3 md:w-[550px] w-[90%]"
                label="Nome"
                variant="filled"
                InputProps={ {
                  classes: {
                    input: 'font-poppins',
                  },
                } }
              />
            </div>
            <div className="mb-4 w-full">
              <TextField
                style={ { backgroundColor: 'white' } }
                onChange={ onGenericChange }
                value={ info.email }
                name="email"
                className="m-3 md:w-[550px] w-[90%]"
                label="E-mail"
                variant="filled"
                InputProps={ {
                  classes: {
                    input: 'font-poppins',
                  },
                } }
              />
            </div>
            <div className="mb-4 w-full">
              <TextField
                style={ { backgroundColor: 'white' } }
                onChange={ onGenericChange }
                value={ info.telefone }
                name="telefone"
                className="m-3 md:w-[550px] w-[90%]"
                label="Telefone"
                variant="filled"
                InputProps={ {
                  classes: {
                    input: 'font-poppins',
                  },
                } }
              />
            </div>
            <div className="mb-4 w-full">
              <TextField
                style={ { backgroundColor: 'white' } }
                onChange={ onGenericChange }
                value={ info.mensagem }
                name="mensagem"
                className="md:w-[550px] w-[90%]"
                label="Mensagem"
                multiline
                maxRows={ 400 }
                minRows={ 3 }
                variant="filled"
                InputProps={ {
                  classes: {
                    input: 'font-poppins',
                  },
                } }
              />
            </div>
          </div>
          <div className="m-3 w-full flex justify-center">
            <button
              onClick={ enviar }
              style={ { fontFamily: 'Poppins, sans-serif', fontWeight: 500 } }
              className="transition duration-200 border-[#64b5f6] text-black border-2 h-10 px-4 rounded-2xl
           bg-[#64b5f6] hover:text-white md:w-[300px] w-[90%]"
            >
              Enviar
            </button>
          </div>
        </div>
        <div
          style={ { fontFamily: 'Poppins, sans-serif', fontWeight: 400 } }
          className="flex flex-col lg:justify-center mb-3
        text-center items-center lg:w-full lg:mt-3 px-2"
        >
          <p>
            Telefone de Contato
            <br />
            (11) 94916-0023
          </p>
        </div>
      </div>
    </div>
  );
}
