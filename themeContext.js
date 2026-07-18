import React, { createContext, useContext, useState } from 'react';
import themes from './theme';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('default');

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'default' ? 'blue' : 'default'));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);