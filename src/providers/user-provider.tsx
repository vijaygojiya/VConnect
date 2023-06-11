import {createContext, useContext} from 'react';
import {useMMKVObject} from 'react-native-mmkv';
import {UserDataType} from '../../@types/common';
import React from 'react';

interface ContextProps {
  storedUser: UserDataType;
  setStoredUser: (value: UserDataType) => void;
}

const UserContext = createContext<ContextProps | null>(null);

interface Props {
  children: JSX.Element | JSX.Element[];
}

export function UserProvider({children}: Props) {
  const [storedUser, setStoredUser] = useMMKVObject<UserDataType>('username');

  return (
    <UserContext.Provider value={{storedUser, setStoredUser}}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext);
}
