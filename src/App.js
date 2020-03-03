import React from 'react';
import logo from './logo.svg';
import './App.css';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting'
import NameList from './components/NameList';
import FocusInput from './components/FocusInput';

function App() {
  return (
    <div className="App">
      {/* <ParentComponent/> */}
      {/* <UserGreeting/> */}

      {/* <NameList/> */}

      <FocusInput/>

    </div>
  );
}

export default App;
