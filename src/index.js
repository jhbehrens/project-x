import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import App from './views/App';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './core/store';
import { Provider } from 'react-redux';

const rootElement = document.getElementById('root');
const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    rootElement
);

registerServiceWorker();
