import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import DATHomepage from './pages/DATHomepage';
import DATThankyouPage from './pages/DATThankyouPage';

import GAGHomepage from './pages/GAGHomepage';
import GAGThankyouPage from './pages/GAGThankyouPage';

export default function Routes(){
  return (
    <BrowserRouter>
      <Switch>

        <Route path="/" exact component={DATHomepage} />
        <Route path="/obrigado-formacao-digital-agile-thinking" exact component={DATThankyouPage} />

        <Route path="/formacao-gerente-agil" exact component={GAGHomepage} />
        <Route path="/obrigado-formacao-gerente-agil" exact component={GAGThankyouPage} />

      </Switch>
    </BrowserRouter>
  )
}
