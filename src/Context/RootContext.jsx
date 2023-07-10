import React, {useState} from 'react';
import {LanguageContext,} from "./index";

const RootContext = ({children}) => {
    const [dark,setDark] = useState(false)
    return (
        <LanguageContext.Provider value={{
            dark,
            setDark
        }}>
            {children}
        </LanguageContext.Provider>
    );
};

export default RootContext;