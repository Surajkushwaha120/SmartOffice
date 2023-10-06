import {createContext, useState} from 'react';

export const ModelContext = createContext();

const ModelProvider = ({children}) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <ModelContext.Provider value={{showModal, setShowModal}}>
      {children}
    </ModelContext.Provider>
  );
};

export default ModelProvider;
