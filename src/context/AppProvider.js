import PropTypes from 'prop-types';
import { useMemo, useState } from 'react';
import AppContext from './AppContext';

function AppProvider({ children }) {
  const [homeValue, setHomeValue] = useState('Home');

  const values = useMemo(() => ({
    homeValue,
    setHomeValue,
  }), [homeValue]);

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
