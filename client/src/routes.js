import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import DATHomepage from './pages/DATHomepage';
import DATThankyouPage from './pages/DATThankyouPage';

import GAGHomepage from './pages/GAGHomepage';
import GAGThankyouPage from './pages/GAGThankyouPage';

import Placeholder from './pages/Placeholder';

export default function Routes(){
  return (
    <BrowserRouter>
      <Switch>

        <Route path="/formacao-digital-agile-thinking" exact component={DATHomepage} />
        <Route path="/obrigado-formacao-digital-agile-thinking" exact component={DATThankyouPage} />

        <Route path="/formacao-gerente-agil" exact component={GAGHomepage} />
        <Route path="/obrigado-formacao-gerente-agil" exact component={GAGThankyouPage} />
        
        <Route path="/" component={Placeholder} />

      </Switch>
    </BrowserRouter>
  )
}
