import { BrowserRouter, Route } from 'react-router-dom';
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Home from './pages/Home';
import './index.css';
import './styles/style.css';

function App() {
  return (
    <div className="bg-[url('./images/fundo.png')] bg-cover bg-center">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact render={ (props) => <Home { ...props } /> } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
