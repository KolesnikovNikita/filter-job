import { combineReducers } from "redux";
import { jobs } from './jobs'
import { resumes } from "./resumes";

export const rootReducer = combineReducers({
  jobs, resumes
});

export type AppState = ReturnType<typeof rootReducer>;