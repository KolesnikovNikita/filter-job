import React from "react";
import MainLayOut from "../layout/Main";
import { useResumes } from "../init/useResumes";
import { ResumeItem } from "../components/ResumeItem";
import SelectLevel from "../components/SelectLevel";
import SelectExperience from "../components/SelectExperience";
import SelectTag from "../components/SelectTag";

export default function Resumes() {
  const {
    handleChangeLevel,
    handleChangeExperience,
    handleChangePersonSkills,
    search,
    list,
  } = useResumes();

  return (
    <MainLayOut>
      <SelectLevel handleChangeLevel={handleChangeLevel} level={search.level} />
      <SelectExperience
        handleChangeExperience={handleChangeExperience}
        experience={search.experience}
      />
      <SelectTag
        handleChangePersonSkills={handleChangePersonSkills}
        personSkills={search.tags}
      />
      {list.map((resume) => (
        <ResumeItem key={resume.id} {...resume} />
      ))}
    </MainLayOut>
  );
}
