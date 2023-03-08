import { createContext, useContext, useState } from "react";

const dictionaryContext = createContext();

export const useDictionary = () => {
    const context = useContext(dictionaryContext);
    return context;
};

export const DictionaryProvider = ({children}) => {
  const [ urban, setUrban ] = useState('');
  const [ other, setOther ] = useState('');
  return(
    <dictionaryContext.Provider value={{ urban, setUrban, other, setOther }}>
        {children}
    </dictionaryContext.Provider>
)
};