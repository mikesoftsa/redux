import React from 'react';
import {render} from 'react-dom';
//import PlayList from "./src/playlist/components/playlist";
//import Media from "./src/playlist/components/media";
//import data from '../../src/api.json'
import Home from "../pages/containers/home";

import { Provider } from 'react-redux';

import { createStore, applyMiddleware } from 'redux';

import reducer from '../reducers/index'
import { Map as map } from 'immutable';

//import data from '../schemas/index'

//console.log(normalizedData);

/*const initialState = {
    data: {
        //...data,
        entities: data.entities,
        categories: data.result.categories,
        search:[],
    },
    modal:{
        visibility: false,
        mediaId: null
    }
};*/

/*function logger({ getState, dispath}){
   return (next)=>{
      return (action) => {
         console.log('estae es mi viejo estado', getState().toJS());
         console.log('vamos a enviar esta aciion', action);
         const value =  next(action);
         console.log('estae es mi nuevo estado', getState().toJS());
         return value;
      }
   }
}*/

const logger = ({ getState, dispath}) => next => action => {
    console.log('estae es mi viejo estado', getState().toJS());
    console.log('vamos a enviar esta aciion', action);
    const value =  next(action);
    console.log('estae es mi nuevo estado', getState().toJS());
    return value;
};

const store = createStore(
    reducer,
    map(),
    applyMiddleware(logger)
    //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

//console.log(store.getState())

const app = document.getElementById('home-container')

//ReactDOM.render(que voy a renderizar, donde lo haré):
//const holaMundo = <h1>hola mundo12fdf</h1>;
//render(<PlayList type="video" title="Que es responsive Design?" author="Miguel Triana" image="./images/covers/responsive.jpg"/>,app);

render(
<Provider store={store}>
   <Home />
</Provider>, app)