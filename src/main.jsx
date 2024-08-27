// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'
// import { ThemeProvider } from './context/ThemeContext';



// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <ThemeProvider>
//     <App />
//     </ThemeProvider>

//   </StrictMode>

// )



// const { theme } = useTheme();
// document.documentElement.setAttribute('data-theme', theme);



import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css'; // Ensure this path is correct
import { ThemeProvider } from './Context/ThemeContext';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>
);



