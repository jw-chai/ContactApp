import useContactModel from '../../models/ContactScreen/useContactModel';

const useContactViewModel = () => {
  const {getContact, contactList} = useContactModel();
  return {
    getContact,
    contactList,
  };
};

export default useContactViewModel;
