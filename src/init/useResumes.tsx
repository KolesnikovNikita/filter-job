import { useDispatch, useSelector } from "react-redux";
import React, { useState, useEffect } from "react";
import Resume, { Level } from "../types/Resume";
import { getResumes } from "../api/fetchJobs";
import { AppState } from "./rootReducer";
import { setResumes, ResumeState } from "./resumes";

export type FilterType = {
  experience?: number;
  level: keyof typeof Level | "";
  tags: string[];
};

type Props = {
  onUpdateLevel(value: keyof typeof Level): void;
  onUpdateTags(value: string[]): void;
  search: FilterType;
  list: Resume[];
};

export const useResumes = (): Props => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState<FilterType>({
    tags: [],
    level: "",
  });

  const { list } = useSelector<AppState, ResumeState>((state) => state.resumes);

  useEffect(() => {
    getResumes().then((res) => {
      dispatch(setResumes(res.data.list));
    });
  }, [dispatch]);

  const onUpdateLevel = (levelValue: keyof typeof Level | "") => {
    const newSearch = {
      ...search,
      level: levelValue,
    };
    setSearch(newSearch);
    getResumes(newSearch).then((res) => {
      dispatch(setResumes(res.data.list));
    });
  };

  const onUpdateTags = (tags: []) => {
    const newSearch = {
      ...search,
      tags: tags,
    };
    setSearch(newSearch);
    getResumes(newSearch).then((res) => {
      dispatch(setResumes(res.data.list));
    });
  };

  return {
    onUpdateTags,
    onUpdateLevel,
    search,
    list,
  };
};
