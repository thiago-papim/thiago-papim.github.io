/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import hamburguerMenu from '../images/hamburguerWhite.png';

export default function HeaderMobile() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);

    if (section) {
      const yOffset = -50; // Deslocamento opcional para compensar o cabeçalho
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({
        top: y,
        behavior: 'smooth',
      });
    }
  };

  const arrMenu = ['Inicio', 'Skills', 'Projetos', 'Contato'];

  const DrawerList = (
    <Box
      sx={ {
        width: 250,
        height: '100%',
        backgroundColor: '#201c24',
        color: 'white',
      } }
      role="presentation"
      onClick={ toggleDrawer(false) }
    >
      <List>
        {arrMenu.map((text) => (
          <ListItem
            className="hover:bg-[#64b5f6]"
            key={ text }
            disablePadding
            onClick={ () => scrollToSection(text) }
          >
            <ListItemButton>
              <ListItemText primary={ text } />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider className="bg-white" />
      <button
        style={ { fontFamily: 'Poppins, sans-serif', fontWeight: 500 } }
        className="transition duration-700 border-[#64b5f6] border-2 h-10 px-4 rounded-3xl
          text-black bg-[#64b5f6] m-3"
        onClick={ () => window.open('//github.com/thiago-papim') }

      >
        GitHub Profile
      </button>
    </Box>
  );

  return (
    <div className="flex">
      <Button onClick={ toggleDrawer(true) }>
        <img
          className="w-8"
          src={ hamburguerMenu }
          alt="menu"
        />
      </Button>
      <Drawer anchor="right" open={ open } onClose={ toggleDrawer(false) }>
        {DrawerList}
      </Drawer>
    </div>
  );
}
