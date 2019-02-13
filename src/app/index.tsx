import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import View from './view';
import rootReducer from './state/reducers/index';

const store = createStore(rootReducer);

const App = () => (
    <Provider store={store}>
        <View />
    </Provider>
);

export default App;
