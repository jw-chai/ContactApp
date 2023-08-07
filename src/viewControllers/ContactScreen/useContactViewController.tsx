import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {IData} from '../../interfaces/dataInterface';
import useContactViewModel from '../../viewModels/ContactScreen/useContactViewModel';
import {useEffect, useState} from 'react';
import {Alert} from 'react-native';

const useContactViewController = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const {getContact, contactList} = useContactViewModel();

  const onNavigateAddContact = (contact: IData) => {
    navigation.navigate('EditContactScreen', {contact});
  };

  const onRefresh = () => {
    setIsRefreshing(true);
    Alert.alert('Refresh?', 'This will reset the list of contacts to default', [
      {
        text: 'Cancel',
        onPress: () => setIsRefreshing(false),
        style: 'cancel',
      },
      {
        text: 'Refresh',
        onPress: () => {
          getContact();
          setTimeout(() => {
            setIsRefreshing(false);
          }, 300);
        },
      },
    ]);
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
    onRefresh,
    isRefreshing,
  };
};

export default useContactViewController;
