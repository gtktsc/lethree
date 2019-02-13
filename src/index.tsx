import ReactDOM from 'react-dom';
// @ts-ignore - concurrent is not know to typescript
import React, { ConcurrentMode } from 'react';
import App from './app/index';

const body = document.body || document.createElement('body');

// @ts-ignore - concurrent is not know to typescript
ReactDOM.createRoot(body).render(
    <ConcurrentMode>
        <App />
    </ConcurrentMode>
);
