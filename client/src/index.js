import React from 'react';
import { render } from 'react-dom';

import './index.css';
import App from './App';

//For router to even work we need to do something like this...
import { BrowserRouter as Router } from 'react-router-dom' 

// You'll need to wrap <App /> for routing to work
render(
<Router>

    <App />

</Router>
 ,document.getElementById('root')
);


//App has been wrapped with Router...