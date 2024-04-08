import { configureStore } from "@reduxjs/toolkit";

export default configureStore(function(state, action){
    if (state === undefined){
        return {
            id:'',
            name:'',
            password1:'',
            password2:''
        }
    }
    return state;
}, +  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())