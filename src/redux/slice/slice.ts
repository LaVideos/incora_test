import {createSlice} from "@reduxjs/toolkit";

const initialState: { show: any,showArr:object,movie:any} = {
    show:'',
    showArr:{},
    movie:null
};


const slice = createSlice({
    name:'slice',
    initialState,
    reducers:{
        getShowName:(state, action)=>{
            state.show = action.payload
        },
        getShowArr:(state, action)=>{
            state.showArr = action.payload
        },
        getMovie:(state, action)=>{
            state.movie = action.payload
        },
    }
});

const {reducer:showReducer,actions:{getShowName,getShowArr,getMovie}} = slice;


const actions = {
    getShowName,
    getShowArr,
    getMovie
}

export {
    showReducer,
    actions
}