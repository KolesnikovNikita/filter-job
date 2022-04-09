import styled, {createGlobalStyle} from 'styled-components';

export const Global = createGlobalStyle`
`

export const MainContainer = styled.div`
font-weight: 400;
font-family: "Open Sans", Arial, sans-serif;

html {
  box-sizing: border-box;
};
*, *::before, *::after {
  box-sizing: inherit;
};
`
export const Header = styled.div`
padding: 15px;
margin: 0 auto;
margin-bottom: 25px;
display: flex;
width: 1160px;
ul {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

 a {
  text-decoration: none;
  color: white;
  font-size: 20px;
  line-height: 30px;
  padding-left: 20px;
}

`
export const PersonalArea = styled.a`
margin-left: auto;
`
export const Content = styled.div`
display:flex;
justify-content: space-between;

width: 1160px;
margin: 0 auto;
margin-bottom: 25px;
`
export const Main = styled.div`

`

export const SideBar = styled.div`

`

export const SearchContainer = styled.div`
display: flex;
`

export const HeaderContainer = styled.div`
background-color: lightgrey;
`


export const SearchPanel = styled.div`
display: flex;
`;

export const ContentContainer = styled.div`
padding-bottom: 200px;
`

export const SearchInputContainer = styled.div`
margin-right: 100px;
`
export const JobList = styled.div`
padding-top: 25px;
`