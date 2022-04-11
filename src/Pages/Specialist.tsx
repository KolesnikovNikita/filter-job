import React, { useState } from "react";
import MainLayOut from "../layout/Main";
import { useResumes } from "../init/useResumes";
import { ResumeItem } from "../components/ResumeItem";
import SelectLevel from "../components/SelectLevel";
import SelectExperience from "../components/SelectExperience";

export default function Resumes() {
  const { list, search, onUpdateLevel, onUpdateTags } = useResumes();

  const [level, setLevel] = useState<string>("");
  const [experience, setExperience] = useState<string>("");

  return (
    <MainLayOut>
      <SelectLevel level={level} experience={experience} setLevel={setLevel} />
      <SelectExperience
        experience={experience}
        level={level}
        setExperience={setExperience}
      />
      {list.map((resume) => (
        <ResumeItem key={resume.id} {...resume} />
      ))}
    </MainLayOut>
  );
}
