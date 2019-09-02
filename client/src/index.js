import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {Provider} from 'react-redux'
import { startSetUser } from './actions/user'
import { startSetEvent } from './actions/event'
import { startSetCategory} from './actions/category'
import configureStore from './store/configureStore'
import 'bootstrap/dist/css/bootstrap.min.css';

const store = configureStore()

store.subscribe(()=>{
    console.log('store', store.getState())
})

store.dispatch(startSetCategory())
store.dispatch(startSetEvent())


if(localStorage.getItem('userAuth')!== 'undefined'){
    console.log('indexjs',localStorage.getItem('userAuth'))
    store.dispatch(startSetUser())
}


const jsx = (
    <Provider store={store}>
        <App/>
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('root'))