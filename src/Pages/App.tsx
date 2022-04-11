import { useJobs } from "../init/useJobs";
import JobItem from "../components/JobItem";
import React from "react";
import SearchInput from "../components/SearchInput";
import FilterInput from "../components/FilterInput";
import FieldOfActivity from "../components/FieldOfActivity";
import SearchArea from "../components/SelectCurrency";
import Salary from "../components/Salary";
import MainLayOut from "../layout/Main";
import SelectTag from "../components/SelectTag";
import InputSalary from "../components/SelectSalary";
import {
  Content,
  Main,
  SideBar,
  ContentContainer,
  SearchPanel,
  JobList,
  SearchContainer,
  MainContainer,
} from "../styles";

function MainPage() {
  const { jobs } = useJobs();

  return (
    <MainLayOut>
      <ContentContainer>
        <Content>
          <Main>
            <SearchPanel>
              <SearchInput />
              <FilterInput />
              <InputSalary />
              <SelectTag />
            </SearchPanel>
            <JobList>
              {jobs.map((job) => (
                <JobItem key={job.id} {...job} />
              ))}
            </JobList>
          </Main>
          <SideBar>
            <FieldOfActivity />
            <SearchContainer>
              <Salary />
              <SearchArea />
            </SearchContainer>
          </SideBar>
        </Content>
      </ContentContainer>
    </MainLayOut>
  );
}

export default MainPage;
