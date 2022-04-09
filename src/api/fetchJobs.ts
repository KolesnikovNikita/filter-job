import axios from './axios';
import { AxiosPromise } from 'axios';
import {Job} from '../types/Job';
import { FilterType } from '../init/useResumes';
import Resume from '../types/Resume';

export const getResumes = (
  queryParams : {} = {}
): AxiosPromise<Resume[]> => {
  return axios.get('/resumes', {
    params: queryParams
  });
};

export const getJobs = (
  queryParams : {} = {}
): AxiosPromise<Job> => {
  return axios.get('/jobs', {
    params: queryParams
  });
};