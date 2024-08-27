

import { useState } from 'react';
import Header from './components/Header/Header';
import SearchBar from './components/SearchBar/SearchBar';
import UserCard from './components/UserCard';


import './App.css';
import { ThemeProvider } from './Context/ThemeContext';


function App() {
  let [userData, setUserData] = useState({});
  let [error, setError] = useState({});
  function fetchUserData(username) {
    setError({});
    fetch(`https://api.github.com/users/${username}`).then(response => {
      let status = response.ok;
      response.json().then((data) => {
        if (status) {
          setUserData(data);
        } else {
          setError(data);
        }
      })
    })
  }
  return (
    <div className="app">
      <ThemeProvider>
      <Header/>
      <SearchBar errorMessage={error.message} handleInput={fetchUserData}/>
      <UserCard user={userData}/>
      </ThemeProvider>
    </div>
  );
}

export default App;





