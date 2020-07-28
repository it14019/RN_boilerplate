import 'react-native-gesture-handler';
import React, {FC, useState, useEffect} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {
  UserAuthProvider,
  User,
} from './src/domain/use-user-authentification/useUserAuthentification';
import Navigation from './src/navigation/Navigation';
import {getData} from './src/domain/async-storage/userAuthentificationStorage';

const App: FC = () => {
  const [state, setState] = useState<{
    userToken: User | null;
    isLoading: boolean;
  }>({
    userToken: {token: null},
    isLoading: true,
  });

  useEffect(() => {
    //ja ir asinhronais izsaukums useeffect, tad vajag vienmeer uztaisit cleanup
    let isRendering = true;
    if (isRendering) {
      const bootstrapAsync = async () => {
        getData().then((response: User | null) => {
          console.log('response', response);
          setState({userToken: response, isLoading: false});
        });
      };
      bootstrapAsync();
    }
    //cleanup
    return () => {
      isRendering = false;
    };
  }, []);

  if (state.isLoading) {
    return (
      <View>
        <Text>Loading..</Text>
      </View>
    );
  }
  return (
    <UserAuthProvider initialUser={state.userToken}>
      <View style={styles.container}>
        <Navigation />
      </View>
    </UserAuthProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
