import React, { createContext, useState } from 'react';

const initalData = {
    isLogged: false,
    id: "",
    registrerProcess: false
}

export default ({ children }) => {

    const [data, setData] = useState(initalData);

    return (
        <GlobalContext.Provider
            value={[
                data,
                setData
            ]}>
            {children}
        </GlobalContext.Provider>
    );
};

export const GlobalContext = createContext();