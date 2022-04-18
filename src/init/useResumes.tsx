import { useDispatch, useSelector } from "react-redux";
import React, { useState, useEffect } from "react";
import Resume, { Level } from "../types/Resume";
import { getResumes } from "../api/fetchJobs";
import { AppState } from "./rootReducer";
import { setResumes, ResumeState } from "./resumes";

type Props = {
  search: FilterType;
  list: Resume[];
  handleChangeLevel(props: string): void;
  handleChangeExperience(props: string): void;
  handleChangePersonSkills(props: string[]): void;
};

export type FilterType = {
  experience: string;
  level: keyof typeof Level | "";
  tags: string[];
};

export const useResumes = (): Props => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState<FilterType>({
    level: "",
    experience: "",
    tags: [],
  });
  useEffect(() => {
    getResumes().then((res) => {
      dispatch(setResumes(res.data.list));
    });
  }, [dispatch]);

  const { list } = useSelector<AppState, ResumeState>((state) => state.resumes);

  const handleChangeLevel = (levelValue: keyof typeof Level | "") => {
    const newSearch = {
      ...search,
      level: levelValue,
    };
    setSearch(newSearch);
    getResumes(newSearch).then((res) => dispatch(setResumes(res.data.list)));
  };

  const handleChangeExperience = (value: string) => {
    const newSearch = {
      ...search,
      experience: value,
    };
    setSearch(newSearch);
    getResumes(newSearch).then((res) => dispatch(setResumes(res.data.list)));
  };
  const handleChangePersonSkills = (values: string[]) => {
    const newSearch = {
      ...search,
      tags: values,
    };
    setSearch(newSearch);
    getResumes(newSearch).then((res) => dispatch(setResumes(res.data.list)));
  };

  return {
    handleChangeLevel,
    handleChangeExperience,
    handleChangePersonSkills,
    search,
    list,
  };
};
