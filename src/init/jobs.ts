import { Job } from "../types/Job";

export const SET_JOBS = 'SET_JOBS';
export const SET_ERROR = 'SET_ERROR';

interface State {
  list: Job[]
}

export type JobState = {
   list: Job[]
}

const initialState = {
  list: []
}

export const setJobAction = (payload: Job[]) => {
  return {
    type: SET_JOBS,
    payload
  }
}


type setJobsAction = {
  type: typeof SET_JOBS,
  payload: Job[]
}

type setErrorLoadingAction = {
  type: typeof SET_ERROR,
  error: boolean
}

type Action = setJobsAction | setErrorLoadingAction

export const jobs = (state: State = initialState, action: Action) => {    
  switch(action.type) {
    case SET_JOBS: {
      return {
        list: action.payload
      }
    }
    case SET_ERROR: {
      return {
        error: action.error
      }
    }
    default:
      return state;
  }
}