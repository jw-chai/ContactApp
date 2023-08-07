import {useCallback} from 'react';
import {useContact} from '../../context/contactContext';
import CONTACT from '../api/data.json';

const useContactModel = () => {
  // get global state from context
  const {contactList, onSaveContactList} = useContact();

  const getContact = useCallback(() => {
    onSaveContactList(CONTACT);
    return CONTACT;
  }, [onSaveContactList]);

  return {
    getContact,
    contactList,
  };
};

export default useContactModel;
