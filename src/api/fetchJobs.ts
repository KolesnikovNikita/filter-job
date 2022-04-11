import axios from './axios';
import { AxiosPromise } from 'axios';
import Job from '../types/Job';
import { FilterType } from '../init/useResumes';
import Resume from '../types/Resume';

type ResResumesType = {
  list: Resume[];
}

export const getResumes = (
  queryParams : {} = {}
): AxiosPromise<ResResumesType> => {
  return axios.get('/resumes', {
    params: queryParams
  });
};

type ResJobType = {
  list : Job[];
  total: number;
}

export const getJobs = (
  queryParams : {} = {}
): AxiosPromise<ResJobType> => {
  return axios.get('/jobs', {
    params: queryParams
  });
};