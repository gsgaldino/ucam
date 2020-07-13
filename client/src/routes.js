import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Homepage from './pages/Homepage';

import DATHomepage from './pages/DATHomepage';
import DATThankyouPage from './pages/DATThankyouPage';

import GALHomepage from './pages/GALHomepage';
import GALThankyouPage from './pages/GALThankyouPage';

import EMDThankyouPage from './pages/EMDThankyouPage';
import EMDHomepage from './pages/EMDHomepage';

import Page404 from './pages/Page404';

export default function Routes(){
  return (
    <BrowserRouter>
      <Switch>

        <Route path="/" exact component={Homepage} />

        <Route path="/formacao-digital-agile-thinking" exact component={DATHomepage} />
        <Route path="/obrigado-formacao-digital-agile-thinking" exact component={DATThankyouPage} />

        <Route path="/formacao-gerente-agil" exact component={GALHomepage} />
        <Route path="/obrigado-formacao-gerente-agil" exact component={GALThankyouPage} />

        <Route path="/formacao-empreendedorismo-digital" exact component={EMDHomepage} />
        <Route path="/obrigado-formacao-empreendedorismo-digital" exact component={EMDThankyouPage} />

        <Route path="/" component={Page404} />

      </Switch>
    </BrowserRouter>
  )
}
