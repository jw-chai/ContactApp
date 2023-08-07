import {useState, useRef} from 'react';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Keyboard, TextInput} from 'react-native';

const useEditContactViewController = () => {
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');

  const firstNameRef = useRef<TextInput>(null);
  const lastNameRef = useRef<TextInput>(null);
  const emailRef = useRef<TextInput>(null);
  const phoneRef = useRef<TextInput>(null);

  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const onBack = () => {
    navigation.goBack();
  };

  const onFocusFirstName = () => {
    if (firstNameRef && firstNameRef.current) {
      firstNameRef.current.focus();
    }
  };
  const onFocusLastName = () => {
    if (lastNameRef && lastNameRef.current) {
      lastNameRef.current.focus();
    }
  };

  const onFocusEmail = () => {
    if (emailRef && emailRef.current) {
      emailRef.current.focus();
    }
  };

  const onFocusPhone = () => {
    if (phoneRef && phoneRef.current) {
      phoneRef.current.focus();
    }
  };

  const onDismissKeyboard = () => {
    Keyboard.dismiss();
  };

  const onChangeText = (
    value: string,
    key: 'firstName' | 'lastName' | 'phone' | 'email',
  ) => {
    switch (key) {
      case 'firstName':
        setFirstName(value);
        break;
      case 'lastName':
        setLastName(value);
        break;
      case 'phone':
        // to ensure only integer
        setPhone(value.replace(/\D/g, ''));
        break;
      case 'email':
        setEmail(value);
        break;
    }
  };

  return {
    firstName,
    lastName,
    email,
    phone,
    onChangeText,
    onBack,
    onFocusFirstName,
    onFocusLastName,
    onFocusEmail,
    onFocusPhone,
    onDismissKeyboard,
    firstNameRef,
    lastNameRef,
    emailRef,
    phoneRef,
  };
};

export default useEditContactViewController;
