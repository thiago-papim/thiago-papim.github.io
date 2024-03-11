import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Sobre from './Sobre';
import Projetos from './Projetos';
import Contato from './Contato';

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={ Home } />
      <Route exact path="/sobre" component={ Sobre } />
      <Route exact path="/projetos" component={ Projetos } />
      <Route exact path="/contato" component={ Contato } />
    </Switch>
  );
}

export default Routes;
