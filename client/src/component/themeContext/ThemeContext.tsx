// ThemeContext.tsx
import React, { createContext, useState, ReactNode, useContext } from 'react';

// Define the shape of the context data
interface ThemeContextType {
  theme: string;
  toggleTheme: () => void;
}
interface IProps {
    children: ReactNode;
}
// Create the context with a default value
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Create a provider component
const ThemeProvider = ({ children }:IProps) => {

  const [theme, setTheme] = useState<string>('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };
return(
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
)
 
};

// Custom hook to use the ThemeContext
const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export { ThemeProvider, useTheme };
