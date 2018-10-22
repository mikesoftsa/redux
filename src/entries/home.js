import React from 'react';
import {render} from 'react-dom';
//import PlayList from "./src/playlist/components/playlist";
//import Media from "./src/playlist/components/media";
import data from '../../src/api.json'
import Home from "../pages/containers/home";

import { Provider } from 'react-redux';

import { createStore } from 'redux';

const initialState = {
    data: {
        ...data
    }
};

const store = createStore(
    (state) => state,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

console.log(store.getState())

const app = document.getElementById('home-container')

//ReactDOM.render(que voy a renderizar, donde lo haré):
//const holaMundo = <h1>hola mundo12fdf</h1>;
//render(<PlayList type="video" title="Que es responsive Design?" author="Miguel Triana" image="./images/covers/responsive.jpg"/>,app);

render(
<Provider store={store}>
    <p>hola mundo</p>
</Provider>, app)