import React from 'react';
import logo from './logo.svg';
import './App.css';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting'
import NameList from './components/NameList';
import FocusInput from './components/FocusInput';
import ParentFRinput from './components/ParentFRinput'

function App() {
  return (
    <div className="App">
      {/* <ParentComponent/> */}
      {/* <UserGreeting/> */}

      {/* <NameList/> */}

      {/* <FocusInput/> */}

      <ParentFRinput/>

    </div>
  );
}

export default App;
