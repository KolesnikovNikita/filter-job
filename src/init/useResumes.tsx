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

  const { list } = useSelector<AppState, ResumeState>((state) => state.resumes);

  const handleChangeLevel = (levelValue: keyof typeof Level | "") => {
    setSearch({
      ...search,
      level: levelValue,
    });
    getResumes({
      level: levelValue,
      experience: search.experience,
      tags: search.tags,
    }).then((res) => dispatch(setResumes(res.data.list)));
  };

  const handleChangeExperience = (value: string) => {
    setSearch({
      ...search,
      experience: value,
    });
    getResumes({
      experience: value,
      level: search.level,
      tags: search.tags,
    }).then((res) => dispatch(setResumes(res.data.list)));
  };
  const handleChangePersonSkills = (values: string[]) => {
    setSearch({
      ...search,
      tags: values,
    });
    getResumes({
      tags: values,
      level: search.level,
      experience: search.experience,
    }).then((res) => dispatch(setResumes(res.data.list)));
  };

  useEffect(() => {
    getResumes().then((res) => {
      dispatch(setResumes(res.data.list));
    });
  }, [dispatch]);

  return {
    handleChangeLevel,
    handleChangeExperience,
    handleChangePersonSkills,
    search,
    list,
  };
};
