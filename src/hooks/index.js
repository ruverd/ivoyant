import React from 'react';
import PropTypes from 'prop-types';

import { AuthProvider } from './auth';
import { ToastProvider } from './toast';

const AppProvider = ({ children }) => (
  <AuthProvider>
    <ToastProvider>{children}</ToastProvider>
  </AuthProvider>
);

AppProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default AppProvider;
