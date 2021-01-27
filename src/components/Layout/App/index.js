import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import Logo from '../../../assets/logo.png';

import { useAuth } from '../../../hooks/auth';

import {
  Container, Header, Content, Footer, Loading,
} from './styles';

const LayoutAuth = ({ children }) => {
  const { signOut, user } = useAuth();
  const [currentDate] = useState(new Date());

  const { isLoading } = useSelector((state) => state.loading);

  return (
    <Container>
      { isLoading && <Loading />}
      <Header>
        <img src={Logo} alt="Ivoyant" />
        <div>
          <span>{`Hi, ${user.name}`}</span>
          <button type="button" onClick={signOut}>
            Sign Out
          </button>
        </div>
      </Header>
      <Content>
        { children }
      </Content>
      <Footer>
        <span>
          { `© ${currentDate.getFullYear()} iVoyant. All Rights Reserved`}
        </span>
      </Footer>
    </Container>
  );
};

LayoutAuth.propTypes = {
  children: PropTypes.element.isRequired,
};

export default LayoutAuth;
