import React, {FC} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginView from '../../view/login-view/LoginView';

const Stack = createStackNavigator();

const OnboardingStack: FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginView} />
    </Stack.Navigator>
  );
};

export default OnboardingStack;
