import React from 'react';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';
import rootReducer from './js/store/reducers/rootReducer';
import { BrowserRouter, Route } from 'react-router-dom';
import { PrivateRoute, AuthProvider } from './js/utils';
import * as Pages from './js/pages';

const store = createStore(
    rootReducer,
    applyMiddleware(thunkMiddleware)
)

export function App() {

    return (
        <Provider store={store}>
            <AuthProvider>
                <BrowserRouter>
                    <Route exact path='/' component={Pages.LandingWithRouter} />
                    <PrivateRoute path='home' component={Pages.HomeWithRouter} />

                </BrowserRouter>
            </AuthProvider>
        </Provider>
    )
}