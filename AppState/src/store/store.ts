import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { reducer as tasksReducer } from "../tasks";
import { reducer as usersReducer } from "../users";

const reducer = combineReducers({ tasksReducer, usersReducer });

export const store = configureStore({ reducer });