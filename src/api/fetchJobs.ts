import axios from './axios';
import { AxiosPromise } from 'axios';
import Job from '../types/Job';
import { FilterType } from '../init/useResumes';
import Resume from '../types/Resume';

type Resumes = {
  list: Resume[];
}

export const getResumes = (
  queryParams : {} = {}
): AxiosPromise<Resumes> => {
  return axios.get('/resumes', {
    params: queryParams
  });
};

type Jobs = {
  list : Job[];
  total: number;
}

export const getJobs = (
  queryParams : {} = {}
): AxiosPromise<Jobs> => {
  return axios.get('/jobs', {
    params: queryParams
  });
};