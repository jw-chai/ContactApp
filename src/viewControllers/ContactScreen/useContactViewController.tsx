import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {IData} from '../../interfaces/dataInterface';

const useContactViewController = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const onNavigateAddContact = (contact: IData) => {
    navigation.navigate('EditContactScreen', {contact});
  };

  return {
    onNavigateAddContact,
  };
};

export default useContactViewController;
