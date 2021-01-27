import React from 'react';
import PropTypes from 'prop-types';

import LayoutAuth from './Auth';
import LayoutApp from './App';
import { useAuth } from '../../hooks/auth';

import Container from './styles';

const Layout = ({ children }) => {
  const { signed } = useAuth();

  return signed ? (
    <Container>
      <LayoutApp>{children}</LayoutApp>
    </Container>
  ) : (
    <Container>
      <LayoutAuth>{children}</LayoutAuth>
    </Container>
  );
};

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
