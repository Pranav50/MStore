import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router} from 'react-router-dom';
import {ProductProvider} from './context';

ReactDOM.render(
<ProductProvider>
        <Router>
                <App />
        </Router>
</ProductProvider>, document.getElementById('root'));
