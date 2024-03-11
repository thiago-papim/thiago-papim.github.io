/* eslint-disable react/jsx-max-depth */
import React, { useContext, useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import { useHistory } from 'react-router-dom';
import menuBlack from '../images/hamburguerBlack.png';
import menuWhite from '../images/hamburguerWhite.png';
import AppContext from '../context/AppContext';

export default function TemporaryDrawer() {
  const { theme } = useContext(AppContext);
  const [state, setState] = useState({ right: false });
  const history = useHistory();

  const icons = [<HomeIcon key={ 1 } />, <InfoIcon key={ 2 } />,
    <LibraryBooksIcon key={ 3 } />, <ContactMailIcon key={ 4 } />];

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const handleTab = (text, index) => {
    localStorage.setItem('menuItem', index);
    if (index > 0) {
      history.push(`/${text.toLowerCase()}`);
    } else {
      history.push('/');
    }
  };

  const list = () => (
    <Box
      sx={ { width: 250 } }
      role="presentation"
      onClick={ toggleDrawer('right', false) }
      onKeyDown={ toggleDrawer('right', false) }
    >
      <List>
        {['Início', 'Sobre', 'Projetos', 'Contato'].map((text, index) => (
          <ListItem
            onClick={ () => handleTab(text, index) }
            key={ text }
            disablePadding
          >
            <ListItemButton>
              <ListItemIcon>
                {icons[index]}
              </ListItemIcon>
              <ListItemText primary={ text } />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Button onClick={ toggleDrawer('right', true) }>
        <img
          src={ theme !== 'dark' ? menuBlack : menuWhite }
          alt="menu"
          className="w-8"
        />
      </Button>
      <Drawer
        anchor="right"
        open={ state.right }
        onClose={ toggleDrawer('right', false) }
      >
        {list()}
      </Drawer>
    </div>
  );
}
