import React, {FC} from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Home: FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Lalala</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
  },
});

export default Home;
