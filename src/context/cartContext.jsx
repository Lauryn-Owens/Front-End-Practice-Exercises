import {useState, useReducer,createContext, createContext } from "react";

//initial state
const initialState = {
    cart:[],
}

//reducer function
function cartReducer(state, action){
    switch(action.type){
        case 'ADD_ITEM':
            return{...state, cart:[state.cart, action.payload]}
    }
}