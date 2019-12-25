import React from 'react';
import './App.css';
import Demo from './DatePicker'
import {foo,AntdButton} from './Button'
function App() {
  console.log(foo)
  return (
    <div className="App">
    <Demo></Demo>
    <AntdButton></AntdButton>
    </div>
  );
}

export default App;
