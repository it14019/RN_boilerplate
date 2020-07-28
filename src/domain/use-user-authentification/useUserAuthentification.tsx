import React, {FC, createContext, useState, useEffect} from 'react';
import {storeData} from '../async-storage/userAuthentificationStorage';

export type User = {
  token: boolean | null;
};

interface ContextType {
  contextState: User | null;
  setContext: (value: User | null) => void;
}

const initialContext: ContextType = {
  contextState: {token: null},
  setContext: () => null,
};

export const userAuthentification = createContext<ContextType>(initialContext);

interface Props {
  initialUser: User | null;
}

export const UserAuthProvider: FC<Props> = ({children, initialUser}) => {
  console.log(' initial user state', initialUser);
  const [state, setState] = useState<User | null>(initialUser);

  const handleSetState = (value: User | null) => {
    if (!value) {
      return;
    }
    setState({...value});
  };

  useEffect(() => {
    console.log('useefect triggered', state);
    //   ja ir izmainas state, tad saglabat tas izmainas telefona atminaa
    storeData(state);

    //ja useEffect padod kaut kadas imainas, tad tas notrigerojās
  }, [state]);

  return (
    <userAuthentification.Provider
      value={{
        contextState: state,
        setContext: handleSetState,
      }}>
      {children}
    </userAuthentification.Provider>
  );
};

// spread operator

// const order = {
//   table: 1,
//   dinner: 'kartupeļi ar gaļu',
//   dessert: 'saldejums',
//   drinks: {
//     coffee: null,
//     wine: 'red',
//   },
// };

// const different_order = {
//   table: 1,
//   dinner: 'omelte',
//   dessert: 'saldejums',
//   drinks: {
//     coffee: null,
//     wine: 'red',
//   },
// };

// const spread_order = {...order, dinner: different_order.dinner};
