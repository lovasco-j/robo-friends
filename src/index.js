import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';

import App from './containers/App'

ReactDOM.render(
    <App />,
    document.getElementById('root')
);

registerServiceWorker();
