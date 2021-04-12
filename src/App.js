import React from 'react';
import './App.css';
import FormLogIn from './container/FormLogIn/index';
import FormRegister from './container/FormRegister/index';

function App() {
  return (
    <div className="App">
      <FormRegister />
      <FormLogIn />
    </div>
  );
}

export default App;
