import useContactModel from '../../models/ContactScreen/useContactModel';

const useContactViewModel = () => {
  const {getContact, contactList, onEditContact} = useContactModel();
  return {
    getContact,
    contactList,
    onEditContact,
  };
};

export default useContactViewModel;
