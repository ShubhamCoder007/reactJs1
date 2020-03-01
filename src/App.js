import React from 'react';
import logo from './logo.svg';
import './App.css';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting'
import NameList from './components/NameList';
function App() {
  return (
    <div className="App">
      {/* <ParentComponent/> */}
      {/* <UserGreeting/> */}

      <NameList/>

    </div>
  );
}

export default App;
