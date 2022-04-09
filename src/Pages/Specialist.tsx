import MainLayOut from "../pattern/Main";
import { useResumes } from "../init/useResumes";
import { ResumeItem } from "../components/ResumeItem";
import SelectLevel from "../components/SelectLevel";
import SelectExperience from "../components/SelectExperience";

export default function Resumes() {
  const { list, search, onUpdateLevel, onUpdateTags } = useResumes();
  
  return (
    <MainLayOut>
      <SelectLevel />
      <SelectExperience />
      {list.map((resume) => (
        <ResumeItem key={resume.id} {...resume} />
      ))}
    </MainLayOut>
  );
}