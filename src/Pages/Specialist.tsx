import React, { useState, useEffect } from "react";
import MainLayOut from "../layout/Main";
import { useResumes } from "../init/useResumes";
import { ResumeItem } from "../components/ResumeItem";
import SelectLevel from "../components/SelectLevel";
import SelectExperience from "../components/SelectExperience";
import SelectTag from "../components/SelectTag";
import { getResumes } from "../api/fetchJobs";
import { useDispatch } from "react-redux";
import { setResumes } from "../init/resumes";

export default function Resumes() {
  const { list, search, onUpdateLevel, onUpdateTags } = useResumes();
  const dispatch = useDispatch();

  const [level, setLevel] = useState<string>("");
  const [experience, setExperience] = useState<string>("");
  const [personSkills, setPersonSkill] = React.useState<string[]>([]);

  const handleChangeLevel = (value: string) => {
    useEffect(() => {
      setLevel(value);
      getResumes({ level: value, experience, tags: personSkills }).then((res) =>
        dispatch(setResumes(res.data.list))
      );
    }, [dispatch, level, experience, personSkills]);
  };
  const handleChangeExperience = () => {};
  const handleChangePersonSkills = () => {};

  return (
    <MainLayOut>
      <SelectLevel
        handleChangeLevel={handleChangeLevel}
        level={level}
        personSkills={personSkills}
        experience={experience}
        setLevel={setLevel}
      />
      <SelectExperience
        personSkills={personSkills}
        experience={experience}
        level={level}
        setExperience={setExperience}
      />
      <SelectTag
        level={level}
        experience={experience}
        personSkills={personSkills}
        setPersonSkill={setPersonSkill}
      />
      {list.map((resume) => (
        <ResumeItem key={resume.id} {...resume} />
      ))}
    </MainLayOut>
  );
}
