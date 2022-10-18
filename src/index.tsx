import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import axios from "axios";
import {SERVER_URL} from "./constants/url";
import {Provider} from "react-redux";
import {createStore} from "redux";
import rootReducer from "./modules";

axios.defaults.baseURL = SERVER_URL;
/** @description for refreshToken */
axios.defaults.withCredentials = true;


const store = createStore(rootReducer);

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <Provider store={store}>
        <App/>
    </Provider>
);

reportWebVitals();
