import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {IData} from '../../interfaces/dataInterface';
import useContactViewModel from '../../viewModels/ContactScreen/useContactViewModel';
import {useEffect, useState} from 'react';

const useContactViewController = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const {getContact, contactList} = useContactViewModel();

  const onNavigateAddContact = (contact: IData) => {
    navigation.navigate('EditContactScreen', {contact});
  };

  useEffect(() => {
    setIsLoading(true);
    getContact();
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [getContact]);

  return {
    onNavigateAddContact,
    getContact,
    contactList,
    isLoading,
  };
};

export default useContactViewController;
