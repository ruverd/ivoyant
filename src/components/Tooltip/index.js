import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

const Tooltip = ({
  title,
  className = '',
  children,
}) => (
  <Container className={className}>
    {children}
    <span>{title}</span>
  </Container>
);

Tooltip.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
  className: PropTypes.string,
};

Tooltip.defaultProps = {
  className: '',
};

export default Tooltip;
