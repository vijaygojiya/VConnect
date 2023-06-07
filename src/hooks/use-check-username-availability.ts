import {useEffect, useState} from 'react';
import useDebounce from './use-debounce';
import {checkUsernameAvailability} from '../servises/authServises';

export default function useCheckUsernameAvailability(username: string) {
  const [isUserNameAvailable, setUserNameAvailable] = useState(true);

  const [isLoading, setIsLoading] = useState(false);
  const debounceUserNameValue = useDebounce(username, 250);
  useEffect(() => {
    handleCheckUserNameAvailable(debounceUserNameValue);
  }, [debounceUserNameValue]);

  const handleCheckUserNameAvailable = async (_username: string) => {
    if (!_username) {
      return;
    }
    try {
      setIsLoading(true);
      setUserNameAvailable(true);
      const isAvailable = await checkUsernameAvailability(_username);
      setUserNameAvailable(isAvailable);
    } catch (error) {
      setUserNameAvailable(false);
    } finally {
      setIsLoading(false);
    }
  };
  return {isLoading, isUserNameAvailable};
}
