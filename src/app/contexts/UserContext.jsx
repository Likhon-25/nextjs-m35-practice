'use client'
import React, { createContext } from 'react';

export const UserContex = createContext();
 
const UserProvider = ({children}) => {
    return (
        <UserContex.Provider value='Tomato'>
            {children}
        </UserContex.Provider>
    );
};

export default UserProvider;