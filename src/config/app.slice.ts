import { createSlice } from "@reduxjs/toolkit";
import { AppState, FormMethod } from "../types.ts";


const initialState: AppState = {
	request: {},
	response: {},
	contentType: "",
	isLoggedIn: false,
	isTokenExpired: false,
	token: "",
	postUrl: "",
	updateUrl: "",
	deleteUrl: "",
	getUrl: "",
	formMethod: "POST" as FormMethod
};

const appSlice = createSlice({
	name: "appSlice",
	initialState,
	reducers: {
		setAppKey(state, action){
			const key = action.payload.key;
			const value = action.payload.value;
			state = {
				...state,
				[ key ]: value,
			};
			return state;
		},
		setAllAppKeys(state, action){
			state = action.payload;
			return state;
		},
	},
});

export const appReducer = appSlice.reducer;
export const { setAppKey, setAllAppKeys } = appSlice.actions;
