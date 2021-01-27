import React from 'react';
import PropTypes from 'prop-types';

import {
  Container, Content, AnimationContainer, Background,
} from './styles';

const LayoutAuth = ({ children }) => (
  <Container>
    <Background />
    <Content>
      <AnimationContainer>{children}</AnimationContainer>
    </Content>
  </Container>
);

LayoutAuth.propTypes = {
  children: PropTypes.element.isRequired,
};

export default LayoutAuth;
