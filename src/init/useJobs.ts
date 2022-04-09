import { getJobs } from '../api/fetchJobs';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setJobAction } from './jobs';
import { AppState } from './rootReducer';
import { JobState } from './jobs';



export const useJobs = () => {
  const dispatch = useDispatch()
  const { list } = useSelector<AppState,JobState>(state => state.jobs)
  
  React.useEffect(() => {
    getJobs().then(res => {
      dispatch(setJobAction(res.data))
    })
  }, [dispatch])
  return {
    jobs: list
  }
  
}