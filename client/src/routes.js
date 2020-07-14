import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Homepage from './pages/Homepage';

import DATHomepage from './pages/DATHomepage';
import DATThankyouPage from './pages/DATThankyouPage';

import GALHomepage from './pages/GALHomepage';
import GALThankyouPage from './pages/GALThankyouPage';

import EMDThankyouPage from './pages/EMDThankyouPage';
import EMDHomepage from './pages/EMDHomepage';

import BAGHomepage from './pages/BAGHomepage';
import BAGThankyouPage from './pages/BAGThankyouPage';

import CBTHomepage from './pages/CBTHomepage';
import CBTThankyouPage from './pages/CBTThankyouPage';

import CIFHomepage from './pages/CIFHomepage';
import CIFThankyouPage from './pages/CIFThankyouPage';

import CPCHomepage from './pages/CPCHomepage';
import CPCThankyouPage from './pages/CPCThankyouPage';

import CURHomepage from './pages/CURHomepage';
import CURThankyouPage from './pages/CURThankyouPage';

import DPSHomepage from './pages/DPSHomepage';
import DPSThankyouPage from './pages/DPSThankyouPage';

import ECMHomepage from './pages/ECMHomepage';
import ECMThankyouPage from './pages/ECMThankyouPage';

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
        
        <Route path="/formacao-business-agility" exact component={BAGHomepage} />
        <Route path="/obrigado-formacao-business-agility" exact component={BAGThankyouPage} />

        <Route path="/formacao-certificacao-cobit-5" exact component={CBTHomepage} />
        <Route path="/obrigado-formacao-certificacao-cobit-5" exact component={CBTThankyouPage} />

        <Route path="/formacao-certificacao-itil-foundation" exact component={CIFHomepage} />
        <Route path="/obrigado-formacao-certificacao-itil-foundation" exact component={CIFThankyouPage} />

        <Route path="/formacao-certificacao-pmp-capm-pmi" exact component={CPCHomepage} />
        <Route path="/obrigado-formacao-certificacao-pmp-capm-pmi" exact component={CPCThankyouPage} />

        <Route path="/formacao-curriculos" exact component={CURHomepage} />
        <Route path="/obrigado-formacao-curriculos" exact component={CURThankyouPage} />

        <Route path="/formacao-desenvolvimento-pessoal" exact component={DPSHomepage} />
        <Route path="/obrigado-formacao-desenvolvimento-pessoal" exact component={DPSThankyouPage} />

        <Route path="/formacao-e-commerce" exact component={ECMHomepage} />
        <Route path="/obrigado-formacao-e-commerce" exact component={ECMThankyouPage} />

        <Route path="/" component={Page404} />

      </Switch>
    </BrowserRouter>
  )
}
