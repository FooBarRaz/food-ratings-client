import { createSlice } from "@reduxjs/toolkit";

export const usersReducer = createSlice({
    name: 'users',
    initialState : { 
        isLoggedIn: false,
        token: undefined
    },
    reducers: {
        handleLogin: (state, action) => {
            state.isLoggedIn = true
            state.token = action.payload.token
        }
    }
});