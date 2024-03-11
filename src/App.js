import { BrowserRouter } from 'react-router-dom';
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
import './index.css';
import './styles/style.css';
import AppProvider from './context/AppProvider';
import Routes from './pages/Routes';
import '@fontsource/montserrat';
import '@fontsource/montserrat/400.css';
import '@fontsource/montserrat/400-italic.css';

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Switch>
          <Routes />
        </Switch>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
