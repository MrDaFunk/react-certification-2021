import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from '../Header';
import Layout from '../Layout';
import Loading from '../Loading';
import Theme from '../Theme';
import Routes from '../Routes';
import State from '../State';

import GlobalStyle from '../../utils/styled/global';

const App = () => (
  <State>
    <Theme>
      <Router>
        <GlobalStyle />
        <Header />
        <Layout>
          <Routes />
          <Loading />
        </Layout>
      </Router>
    </Theme>
  </State>
);

export default App;
