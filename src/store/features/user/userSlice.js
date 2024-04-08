import {createSlice} from '@reduxjs/toolkit'
import { toast } from "react-toastify";

const themes = {
    winter: 'winter',
    dracula: 'dracula',
}

const getThemeFromLocalStorage = () => {
    const theme = localStorage.getItem('theme');
    document.documentElement.setAttribute('data-theme', theme);
    return theme;
}

const getUserFromLocalStorage = () => {
   return JSON.parse(localStorage.getItem('user')) || null;
}

const initialState = {
    user: {
        userName: 'yamil'   //getUserFromLocalStorage()
    },
    theme: getThemeFromLocalStorage() || 'dracula'
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loginUser: (state, action) => {
            console.log('login')
            const {user} = action.payload;
            state.user = user;
            localStorage.setItem('user', JSON.stringify(state.user));
            toast.success('user logged')
        },
        logoutUser: (state) => {
            state.user = null;
            localStorage.removeItem('user')
            toast.error('user unlogged')
        },
        toggleTheme: (state) => {
            const {dracula, winter} = themes;
            state.theme = state.theme === dracula ? winter : dracula;
            document.documentElement.setAttribute('data-theme', state.theme);
            localStorage.setItem('theme', state.theme)
        },
    }
})

export const {loginUser, logoutUser, toggleTheme} = userSlice.actions; 
export default userSlice.reducer;

