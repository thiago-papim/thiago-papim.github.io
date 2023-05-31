import { BrowserRouter, Route } from 'react-router-dom';
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Home from './pages/Home';
import './index.css';
import './styles/style.css';
import AppProvider from './context/AppProvider';

function App() {
  return (
    <div className="bg-[url('./images/fundo.png')] bg-cover bg-center">
      <AppProvider>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact render={ (props) => <Home { ...props } /> } />
          </Switch>
        </BrowserRouter>
      </AppProvider>
    </div>
  );
}

export default App;
