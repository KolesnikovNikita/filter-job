import { getJobs } from '../api/fetchJobs';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setJobAction } from './jobs';
import { AppState } from './rootReducer';
import { JobState } from './jobs';
import Job from "../types/Job"
import { useState } from "react";
import { Currency } from "../types/Job";

type Props = {
  handleChangeSkills(params: string[]): void;
  handleChangeShowSalary(params: boolean): void;
  handleChangeSalary(params: string): void;
  handleChangeCurrency(params: string): void;
  handleChangeQualification(params: string): void;
  handleSelectActivity(params: string[]): void;
  jobs: Job[];
  list: FilterType;
}

export type FilterType = {
  activity: string[];
  currency: keyof typeof Currency | "";
  salary: string;
  is_salary: boolean;
  level: string;
  skills: string[];
};

export const useJobs = (): Props => {
  const dispatch = useDispatch();
  const [ search, setFilter ] = useState<FilterType>({
    activity:[],
    currency: "",
    salary: "",
    is_salary: false,
    level: "junior",
    skills: [],
  })
  React.useEffect(() => {
    getJobs().then(res => {
      dispatch(setJobAction(res.data.list))
    })
  }, [dispatch])
  
  const { list } = useSelector<AppState,JobState>(state => state.jobs);

  const handleSelectActivity = (values: string[]) => {
    const newSearch = {
      ...search,
      activity: values
    }
    setFilter(newSearch)
    getJobs(newSearch).then(res => dispatch(setJobAction(res.data.list)))
  };

  const handleChangeSkills = (values: string[]) => {
    const newSearch = {
      ...search,
      skills: values
    }
    setFilter(newSearch);
    getJobs(newSearch)
  }

  const handleChangeShowSalary = (value: boolean) => {
    const newSearch = {
      ...search,
      is_salary: value
    }
    setFilter(newSearch);
    getJobs(newSearch).then((res) => dispatch(setJobAction(res.data.list)));
  };

  const handleChangeSalary = (value: string) => {
    const newSearch = {
      ...search,
      salary: value
    }
    setFilter(newSearch);
    getJobs(newSearch).then((res) => dispatch(setJobAction(res.data.list)));
  };

  const handleChangeCurrency = (value: keyof typeof Currency | "") => {
    const newSearch = {
      ...search,
      currency: value
    }
    setFilter(newSearch);
    getJobs(newSearch).then((res) => dispatch(setJobAction(res.data.list)));
  };
  
  const handleChangeQualification = (value: string) => {
    const newSearch = {
      ...search,
      level: value
    }
    setFilter(newSearch);
    getJobs(newSearch).then((res) => dispatch(setJobAction(res.data.list)));
  };

 
  return {
    jobs: list,
    handleChangeSkills,
    handleChangeShowSalary,
    handleChangeSalary,
    handleChangeCurrency,
    handleChangeQualification,
    handleSelectActivity,
    list: search,
  }
}