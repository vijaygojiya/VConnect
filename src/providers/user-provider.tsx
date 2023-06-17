import React, {createContext, useContext} from 'react';
import {useMMKVObject} from 'react-native-mmkv';
import {UserDataType} from '../../@types/common';

interface ContextProps {
  storedUser: UserDataType | undefined;
  setStoredUser: (value: UserDataType) => void;
}

const UserContext = createContext<ContextProps | null>(null);

interface Props {
  children: JSX.Element | JSX.Element[];
}

export function UserProvider({children}: Props) {
  const [storedUser, setStoredUser] =
    useMMKVObject<UserDataType>('loggedInUser');

  return (
    <UserContext.Provider value={{storedUser, setStoredUser}}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
}
