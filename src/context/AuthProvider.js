import React, { createContext } from 'react';
import useFirebase from '../hook/useFirebase';

const AuthContext = createContext();

export const AuthProvider = ({children}) => {

    const allContext = useFirebase();
    return (
        <AuthContext.Provider value={allContext}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;