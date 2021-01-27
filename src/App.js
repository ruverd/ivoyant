import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import GlobalStyle from './styles/global';
import AppProvider from './hooks';
import Routes from './routes';
import store from './store';

import Layout from './components/Layout';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppProvider>
          <Layout>
            <Routes />
          </Layout>
        </AppProvider>
        <GlobalStyle />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
