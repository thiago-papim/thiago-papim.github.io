import PropTypes from 'prop-types';
import { useEffect, useMemo, useState } from 'react';
import AppContext from './AppContext';

function AppProvider({ children }) {
  const [homeValue, setHomeValue] = useState(0);
  const [theme, setTheme] = useState('dark');
  const [btnMobile, setBtnMobile] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('ligth');
    root.classList.remove('dark');
    root.classList.add(theme);
  }, [theme]);

  const values = useMemo(() => ({
    homeValue,
    setHomeValue,
    theme,
    setTheme,
    btnMobile,
    setBtnMobile,
  }), [homeValue, theme, btnMobile]);

  return (
    <AppContext.Provider value={ values }>
      {children}
    </AppContext.Provider>
  );
}

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppProvider;
