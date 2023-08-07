import {useCallback} from 'react';
import {useContact} from '../../context/contactContext';
import CONTACT from '../api/data.json';
import {IData} from '../../interfaces/dataInterface';

const useContactModel = () => {
  // get global state from context
  const {contactList, onSaveContactList} = useContact();

  const getContact = useCallback(() => {
    onSaveContactList(CONTACT);
    return CONTACT;
  }, [onSaveContactList]);

  const onEditContact = (updatedContact: IData) => {
    if (!updatedContact.id) {
      throw new Error('Contact is required');
    }
    const updatedContactList = contactList.map((_contact: IData) => {
      if (_contact.id === updatedContact.id) {
        return updatedContact;
      }
      return _contact;
    });
    onSaveContactList(updatedContactList);
    return updatedContactList;
  };

  return {
    getContact,
    contactList,
    onEditContact,
  };
};

export default useContactModel;
