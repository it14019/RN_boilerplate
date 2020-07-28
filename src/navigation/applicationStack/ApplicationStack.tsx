import React, {FC} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../../view/home/Home';

const Stack = createStackNavigator();

const ApplicationStack: FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

export default ApplicationStack;
