
// import React, { createContext, useState, useEffect } from 'react';

// // Create the ThemeContext with a default value
// export const ThemeContext = createContext();

// // Create a provider component
// export const ThemeProvider = ({ children }) => {
//   // Initialize the theme from local storage or default to 'light'
//   const [currentTheme, setCurrentTheme] = useState(localStorage.getItem('devfinder-theme') || 'light');

//   // Function to toggle the theme
//   const toggleTheme = () => {
//     const newTheme = currentTheme === 'light' ? 'dark' : 'light';
//     setCurrentTheme(newTheme);
//     localStorage.setItem('devfinder-theme', newTheme);
//   };

//   // Apply the theme to the document
//   useEffect(() => {
//     document.documentElement.setAttribute('data-theme', currentTheme);
//   }, [currentTheme]);

//   // Provide the theme and toggle function to children
//   return (
//     <ThemeContext.Provider value={{ currentTheme, toggleTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };

import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState(document.documentElement.getAttribute('data-theme'));

  const toggleTheme = () => {
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setCurrentTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('devfinder-theme', newTheme);
  };

  return (
    <ThemeContext.Provider value={{ currentTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
