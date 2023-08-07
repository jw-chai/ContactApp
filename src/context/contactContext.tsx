import React, {useState, useContext, ReactNode} from 'react';
import {IData} from '../interfaces/dataInterface';

interface ContactContextProps {
  contactList: IData[];
  onSaveContactList: (contacts: IData[]) => void;
}

interface ContactProviderProps {
  children: ReactNode;
}

let ContactContext = React.createContext<ContactContextProps | undefined>(
  undefined,
);
let {Provider} = ContactContext;

const ContactProvider: React.FC<ContactProviderProps> = ({children}) => {
  const [contactList, setContactList] = useState<Array<IData>>([]);

  return (
    <Provider value={{contactList, onSaveContactList: setContactList}}>
      {children}
    </Provider>
  );
};

const useContact = (): ContactContextProps => {
  const context = useContext(ContactContext);
  if (!context) {
    throw new Error('useContact must be used within a ContactProvider');
  }
  return context;
};

export {useContact, ContactContext, ContactProvider};
