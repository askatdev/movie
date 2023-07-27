import React, {useState} from 'react';
import {LanguageContext,} from "./index";

const RootContext = ({children}) => {
    const [dark,setDark] = useState(false)
    const [language,setLanguage] = useState("en-US")
    return (
        <LanguageContext.Provider value={{
            language,
            setLanguage,
            dark,
            setDark
        }}>
            {children}
        </LanguageContext.Provider>
    );
};

export default RootContext;