import React, {FC} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

//vizuālā komponente ir pilnībā nodalīta no funkcionaļās daļas
interface Props {
  onPress: () => void;
}

const LoginComponent: FC<Props> = ({onPress}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Press to login...</Text>
      <Button title="login" onPress={onPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {marginBottom: 16},
});

export default LoginComponent;
