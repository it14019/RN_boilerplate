import AsyncStorage from '@react-native-community/async-storage';
import {User} from '../use-user-authentification/useUserAuthentification';

export const storeData = async (value: User | null) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem('user-token', jsonValue);
  } catch (e) {
    console.log('could not save user token in memory');
  }
};

export const getData = async (): Promise<User | null> => {
  try {
    const jsonValue = await AsyncStorage.getItem('user-token');

    console.log('get data from storage', jsonValue);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (err) {
    console.log('could not get stored user-token', err);
    return null;
  }
};
