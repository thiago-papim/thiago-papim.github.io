/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-max-depth */
/* eslint-disable react/prop-types */
/* eslint-disable no-magic-numbers */
/* eslint-disable max-len */
import React, { useContext, useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import HomeIcon from '@mui/icons-material/Home';
import Switch from '@mui/material/Switch';
import InfoIcon from '@mui/icons-material/Info';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import { BottomNavigationAction, Box, FormControlLabel } from '@mui/material';
import { useHistory } from 'react-router-dom';
import logo from '../images/logo.png';
import HeaderMobile from './HeaderMobile';
import AppContext from '../context/AppContext';
import BtnWhatspp from './BtnWhatsApp';

const styleForPaper = {
  width: '30px',
  height: '30px',
};

function Header() {
  const { theme: themeTwo, setTheme } = useContext(AppContext);
  const [value, setValue] = useState(5);
  const modoStorages = localStorage.getItem('modo');
  const [modo, setModo] = useState(modoStorages !== 'true');
  const history = useHistory();

  useEffect(() => {
    const valueMenu = localStorage.getItem('menuItem');
    setValue(Number(valueMenu));
    const modoStorage = localStorage.getItem('modo');
    const themeMode = localStorage.getItem('theme');
    if (!modoStorage) {
      localStorage.setItem('modo', false);
    }
    if (!themeMode) {
      localStorage.setItem('theme', 'ligth');
    }
  }, []);

  useEffect(() => {
    const darkStorage = localStorage.getItem('theme');
    if (darkStorage) {
      setTheme(darkStorage);
    }
  }, [setTheme]);

  const paths = ['/', '/sobre', '/projetos', '/contato'];
  const itensName = ['Início', 'Sobre', 'Projetos', 'Contato'];
  const icons = [
    <HomeIcon style={ styleForPaper } key={ 1 } />, <InfoIcon style={ styleForPaper } key={ 2 } />,
    <LibraryBooksIcon style={ styleForPaper } key={ 3 } />, <ContactMailIcon style={ styleForPaper } key={ 4 } />,
  ];

  const teste = (i) => {
    if (value === i && modo) {
      return { color: value === i ? '#233dff' : '#696969' };
    }
    if (value !== i && modo) {
      return { color: value === i ? '#00BFFF' : '#696969' };
    }
    return { color: value === i ? '#00BFFF' : '#DCDCDC' };
  };

  const MaterialUISwitch = styled(Switch)(({ theme }) => ({
    width: 62,
    height: 34,
    padding: 7,
    '& .MuiSwitch-switchBase': {
      margin: 1,
      padding: 0,
      transform: 'translateX(6px)',
      '&.Mui-checked': {
        color: '#fff',
        transform: 'translateX(22px)',
        '& .MuiSwitch-thumb:before': {
          backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
            '#fff',
          )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
        },
        '& + .MuiSwitch-track': {
          opacity: 1,
          backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
        },
      },
    },
    '& .MuiSwitch-thumb': {
      backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#001e3c',
      width: 32,
      height: 32,
      '&::before': {
        content: '\'\'',
        position: 'absolute',
        width: '100%',
        height: '100%',
        left: 0,
        top: 0,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          '#fff',
        )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
      },
    },
    '& .MuiSwitch-track': {
      opacity: 1,
      backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
      borderRadius: 20 / 2,
    },
  }));
  return (
    <div
      className="flex justify-between h-24 md:h-32 items-center"
    >
      <BtnWhatspp />
      <button
        onClick={ () => {
          localStorage.setItem('menuItem', Number(0));
          history.push('/');
        } }
      >
        <img
          className="w-16 md:w-20 lg:w-24 mx-6"
          src={ logo }
          alt="logo"
        />
      </button>
      <div className="w-full flex justify-end">
        <Box className="lg:w-[50%] md:w-[70%] w-[80%] md:flex flex-col hidden">
          <div className="flex w-full">
            { itensName.map((item, i) => (
              <div
                key={ i }
                className="flex flex-col justify-start w-full items-center"
              >
                <BottomNavigationAction
                  className={ `${value === i ? 'Mui-selected' : ''}` }
                  style={ { ...teste(i) } }
                  showLabel
                  label={ item }
                  onClick={ () => {
                    setValue(i);
                    localStorage.setItem('menuItem', Number(i));
                    history.push(paths[i]);
                  } }
                  icon={ icons[i] }
                />
              </div>
            ))}
          </div>
          {/* </BottomNavigation> */}
        </Box>
        <FormControlLabel
          onChange={ () => {
            setModo(!modo);
            setTheme(themeTwo === 'dark' ? 'ligth' : 'dark');
            localStorage.setItem('theme', modo ? 'dark' : 'ligth');
            localStorage.setItem('modo', modo);
          } }
          control={
            <MaterialUISwitch
              sx={ { m: 0 } }
              checked={ themeTwo === 'dark' }
            />
          }
        />
        <div className="flex md:hidden justify-center items-center">
          <HeaderMobile />
        </div>
      </div>
    </div>
  );
}

export default Header;
