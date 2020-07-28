import React, {FC, useContext} from 'react';
import {userAuthentification} from '../domain/use-user-authentification/useUserAuthentification';
import {NavigationContainer} from '@react-navigation/native';
import OnboardingStack from './onboardingStack/OnboardingStack';
import ApplicationStack from './applicationStack/ApplicationStack';

const Navigation: FC = () => {
  const {contextState} = useContext(userAuthentification);
  console.log('contextState in navigation', contextState);
  return (
    <NavigationContainer>
      {contextState && contextState.token ? (
        <ApplicationStack />
      ) : (
        <OnboardingStack />
      )}
    </NavigationContainer>
  );
};

export default Navigation;
