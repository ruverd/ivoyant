import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

const Button = ({ children, loading, ...props }) => (
  <Container type="button" {...props}>
    {loading ? 'Loading...' : children}
  </Container>
);

Button.propTypes = {
  loading: PropTypes.bool,
  children: PropTypes.string.isRequired,
};

Button.defaultProps = {
  loading: false,
};

export default Button;
