import React, {FC, useContext} from 'react';
import {
  userAuthentification,
  User,
} from '../../domain/use-user-authentification/useUserAuthentification';
import LoginComponent from './LoginComponent';

const LoginView: FC = () => {
  const {setContext} = useContext(userAuthentification);

  const handleLogin = () => {
    const newUser: User = {token: true};
    setContext(newUser);
  };

  return <LoginComponent onPress={handleLogin} />;
};

export default LoginView;
