import React from 'react';
import './App.css';
import Password from './components/password/Password';

function App() {
  return (
    <div className='wrapper'>
      <main className='main'>
        <div className='main__container container'>
          <Password />
        </div>
      </main>
    </div>
  );
}

export default App;
