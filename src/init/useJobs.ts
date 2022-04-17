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
  filter: FilterType;
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
  const [ filter, setFilter ] = useState<FilterType>({
    activity:[],
    currency: "",
    salary: "",
    is_salary: false,
    level: "junior",
    skills: [],
  })
  const dispatch = useDispatch();
  const { list } = useSelector<AppState,JobState>(state => state.jobs);

  const handleSelectActivity = (values: string[]) => {
    setFilter({
      ...filter,
      activity: values
    })
    getJobs({activity: values, currency: filter.currency, skills: filter.skills, is_salary: filter.is_salary, salary: filter.salary, level: filter.level}).then(res => dispatch(setJobAction(res.data.list)))
  };

  const handleChangeSkills = (values: string[]) => {
    setFilter({
      ...filter,
      skills: values
    });
    getJobs({activity: filter.activity, currency: filter.currency, skills: values, is_salary: filter.is_salary, salary: filter.salary, level: filter.level}).then(res => dispatch(setJobAction(res.data.list)))
  }

  const handleChangeShowSalary = (value: boolean) => {
    setFilter({
      ...filter,
      is_salary: value
    });
    getJobs({
      activity: filter.activity,
      is_salary: value,
      skills: filter.skills,
      salary: filter.salary,
      currency: filter.currency,
      level: filter.level,
    }).then((res) => dispatch(setJobAction(res.data.list)));
  };

  const handleChangeSalary = (value: string) => {
    setFilter({
      ...filter,
      salary: value
    });
    getJobs({
      activity: filter.activity,
      is_salary: filter.is_salary,
      skills: filter.skills,
      salary: value,
      currency: filter.currency,
      level: filter.level,
    }).then((res) => dispatch(setJobAction(res.data.list)));
  };

  const handleChangeCurrency = (value: keyof typeof Currency | "") => {
    setFilter({
      ...filter,
      currency: value
    });
    getJobs({
      activity: filter.activity,
      is_salary: filter.is_salary,
      skills: filter.skills,
      salary: filter.salary,
      currency: value,
      level: filter.level,
    }).then((res) => dispatch(setJobAction(res.data.list)));
  };
  
  const handleChangeQualification = (value: string) => {
    setFilter({
      ...filter,
      level: value
    });
    getJobs({
      activity: filter.activity,
      is_salary: filter.is_salary,
      skills: filter.skills,
      salary: filter.salary,
      currency: filter.currency,
      level: value,
    }).then((res) => dispatch(setJobAction(res.data.list)));
  };

  React.useEffect(() => {
    getJobs().then(res => {
      dispatch(setJobAction(res.data.list))
    })
  }, [dispatch])
  return {
    jobs: list,
    handleChangeSkills,
    handleChangeShowSalary,
    handleChangeSalary,
    handleChangeCurrency,
    handleChangeQualification,
    handleSelectActivity,
    filter,
  }
  
}