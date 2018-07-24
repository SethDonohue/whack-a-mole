import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { render as renderDOM } from 'react-dom';

import reducer from './lib/reducer';
import App from './component/app';

const store = createStore(reducer, { score: 0, timer: 9 });

const container = document.createElement('main');
document.body.appendChild(container);

renderDOM(
    <Provider store={store} >
      <App />
    </Provider>
);
