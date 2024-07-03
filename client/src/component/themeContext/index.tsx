import React from 'react';
import { ThemeProvider } from './ThemeContext';
import ThemeToggler from './ThemeToggler';

const AppContext: React.FC = () => {
  return (
    <ThemeProvider>
      <div>
        <h1>React TypeScript useContext Example</h1>
        <ThemeToggler />
      </div>
    </ThemeProvider>
  );
};

export default AppContext