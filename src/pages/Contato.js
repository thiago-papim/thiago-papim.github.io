/* eslint-disable react/jsx-max-depth */
/* eslint-disable no-magic-numbers */
import React, { useState } from 'react';
import { Alert, Backdrop, Button, CircularProgress,
  Stack, TextField, Typography } from '@mui/material';
import emailjs from '@emailjs/browser';
import Header from '../components/Header';
import Footer from '../components/Footer';

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
      'service_dl4nema',
      'template_w3iekgk',
      templeteParams,
      'OSuuCWBO6Qc2by8bB',
    );
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
      className="flex flex-col justify-start
    dark:bg-[url('./images/fundo.png')]
    bg-[url('./images/fundo-white.jpg')]
    min-h-screen"
    >
      <Header />
      <Backdrop
        sx={ { color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 } }
        open={ open }
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <div className="flex flex-col items-center">
        <div
          className="mb-3 flex flex-col md:w-[600px] w-[100%]
          md:rounded-3xl dark:p-7 items-center
        text-center dark:bg-white dark:opacity-70"
        >
          <Typography
            variant="overline"
            display="block"
            gutterBottom
            style={ { fontSize: '20px', fontWeight: 'bold' } }
          >
            Entre em contato
          </Typography>

          <Typography
            variant="caption"
            display="block"
            gutterBottom
            className="px-4"
            style={ { fontSize: '13px', fontWeight: 'bold' } }
          >
            Preencha o formulário abaixo e entre em contato,
            responderei o mais breve possível.
          </Typography>
          <div
            className="w-full items-center flex flex-col mt-4 h-[390px]"
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
                onChange={ onGenericChange }
                value={ info.nome }
                name="nome"
                className="m-3 md:w-[550px] w-[90%]"
                label="Nome"
                variant="outlined"
              />
            </div>
            <div className="mb-4 w-full">
              <TextField
                onChange={ onGenericChange }
                value={ info.email }
                name="email"
                className="m-3 md:w-[550px] w-[90%]"
                label="E-mail"
                variant="outlined"
              />
            </div>
            <div className="mb-4 w-full">
              <TextField
                onChange={ onGenericChange }
                value={ info.telefone }
                name="telefone"
                className="m-3 md:w-[550px] w-[90%]"
                label="Telefone"
                variant="outlined"
              />
            </div>
            <div className="mb-4 w-full">
              <TextField
                onChange={ onGenericChange }
                value={ info.mensagem }
                name="mensagem"
                className="m-3 md:w-[550px] w-[90%]"
                label="Mensagem"
                multiline
                maxRows={ 400 }
                minRows={ 3 }
              />
            </div>
          </div>
          <div className="m-3 w-full flex justify-center">
            <Button
              onClick={ enviar }
              className="p-10 md:w-[600px] w-[90%] h-12"
              variant="contained"
            >
              Enviar
            </Button>
          </div>
        </div>
        <div
          className="flex flex-col lg:justify-center mb-3 font-custom
        text-center items-center lg:w-full lg:mt-3 px-2 dark:text-white"
        >
          <p>
            Telefone de Contato
            <br />
            (11) 94916-0023
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
