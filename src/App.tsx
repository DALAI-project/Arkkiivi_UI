import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

import {
  faInfoCircle, 
  faUpload, 
  faTriangleExclamation, 
  faFile, 
  faTrash, 
  faCircleCheck, 
  faCircleXmark, 
  faGear, 
  faPen, 
  faChevronDown,
  faChevronUp
} from '@fortawesome/free-solid-svg-icons';

import {
  faFacebook, faSquareInstagram, faSquareTwitter
} from '@fortawesome/free-brands-svg-icons';

library.add(fas, 
  faUpload, 
  faInfoCircle, 
  faTriangleExclamation, 
  faFile, 
  faTrash, 
  faCircleCheck, 
  faCircleXmark, 
  faGear, 
  faPen, 
  faFacebook, 
  faSquareInstagram, 
  faSquareTwitter, 
  faChevronDown,
  faChevronUp);

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
