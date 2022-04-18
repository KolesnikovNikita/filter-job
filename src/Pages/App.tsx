import { useJobs } from "../init/useJobs";
import JobItem from "../components/JobItem";
import React from "react";
import {
  Content,
  Main,
  SideBar,
  ContentContainer,
  JobList,
  SearchContainer,
} from "../styles";
import FieldOfActivity from "../components/FieldOfActivity";
import SelectCurrency from "../components/SelectCurrency";
import MainLayOut from "../layout/Main";
import InputSalary from "../components/SelectSalary";
import ShowSalary from "../components/ShowSalary";
import SelectQualification from "../components/SelectQualification";
import SelectSkills from "../components/SelectSkills";

function MainPage() {
  const {
    jobs,
    list,
    handleChangeCurrency,
    handleChangeQualification,
    handleChangeSalary,
    handleChangeShowSalary,
    handleChangeSkills,
    handleSelectActivity,
  } = useJobs();

  return (
    <MainLayOut>
      <ContentContainer>
        <Content>
          <Main>
            <JobList>
              {jobs.map((job) => (
                <JobItem key={job.id} {...job} />
              ))}
            </JobList>
          </Main>
          <SideBar>
            <FieldOfActivity handleSelectActivity={handleSelectActivity} />
            <SelectCurrency
              handleChangeCurrency={handleChangeCurrency}
              currency={list.currency}
            />
            <InputSalary
              handleChangeSalary={handleChangeSalary}
              salary={list.salary}
            />
            <ShowSalary
              handleChangeShowSalary={handleChangeShowSalary}
              isShowSalary={list.is_salary}
            />
            <SelectQualification
              qualification={list.level}
              handleChangeQualification={handleChangeQualification}
            />
            <SelectSkills
              handleChangeSkills={handleChangeSkills}
              personSkills={list.skills}
            />
          </SideBar>
        </Content>
      </ContentContainer>
    </MainLayOut>
  );
}

export default MainPage;
