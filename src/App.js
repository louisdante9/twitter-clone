import React, { useState } from 'react';
import './App.css';
import black from './images/blck.jpg';
import white  from './images/whte.jpg';
import ImageToggleOnMouseOver from './ImageToggleOnMouseOver';

function App() {
  return (
    <div>
      <ImageToggleOnMouseOver primaryImg={black} secondaryImg={white}/>
      <img />
    </div>
  );
}

export default App;
