import { getJobs } from '../api/fetchJobs';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setJobAction } from './jobs';
import { AppState } from './rootReducer';
import { JobState } from './jobs';
import Job from "../types/Job"

type Props = {
  jobs: Job[];
}

export const useJobs = (): Props => {
  const dispatch = useDispatch()
  const { list } = useSelector<AppState,JobState>(state => state.jobs)
  
  React.useEffect(() => {
    getJobs().then(res => {
      dispatch(setJobAction(res.data.list))
    })
  }, [dispatch])
  return {
    jobs: list
  }
  
}