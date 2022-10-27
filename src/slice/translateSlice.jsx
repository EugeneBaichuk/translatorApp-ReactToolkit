import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    lang1: '',
    lang2: '',
    text: '',
    translate: '',
    data: []
}

const translateSlice = createSlice({
    name: "translate",
    initialState, 
    reducers: {
        setLang1: (state, action) => {
            state.lang1 = action.payload
        },
        setLang2: (state, action) => {
            state.lang2 = action.payload
        },
        setText: (state, action) => {
            state.text = action.payload
        },
        setTranslate: (state, action) => {
            state.translate = action.payload
        },
        setData: (state, action) => {
            state.data.push(action.payload) 
        }
    }
})

export const { setLang1, setLang2, setText, setTranslate, setChangeHistory, setData } = translateSlice.actions;
export const showValue = (state) => state.translate;
export default translateSlice.reducer;