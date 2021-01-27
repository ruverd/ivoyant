import React, {
  createContext, useCallback, useState, useContext,
} from 'react';
import PropTypes from 'prop-types';

import api from '../services/api';

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [data, setData] = useState(() => {
    const user = localStorage.getItem('@Ivoyant:user');

    if (user) {
      return { user: JSON.parse(user) };
    }

    return {};
  });

  const signIn = useCallback(async ({ email, password }) => {
    // Get Request because it's not a real backend
    const response = await api.get(`users?email=${email}&password=${password}`);

    if (response.data[0]) {
      const { id, name } = response.data[0];

      localStorage.setItem('@Ivoyant:user', JSON.stringify({
        id,
        name,
      }));

      setData({
        id,
        name,
      });
    } else {
      throw new Error('Invalid credetials');
    }
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@Ivoyant:user');

    setData({});
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user: data.user,
        signed: !!data.user,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

AuthProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export { AuthProvider, useAuth };
