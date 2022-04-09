import { Link } from 'react-router-dom';
import React from 'react';
import { HeaderContainer, Header, PersonalArea} from '../styles';

type Props = {
  children: React.ReactNode
}

function MainLayOut ({children}: Props) {
  return (
    <>
      <HeaderContainer>
        <Header>
          <ul>
            <li><Link to="jobs">Jobs</Link></li>
            <li><Link to="specialist">Specialist</Link></li>
            <li><Link to="companies">Companies</Link></li>
            <li><Link to="salaries">Salaries</Link></li>
          </ul>
          <PersonalArea href="#">Enter</PersonalArea>
        </Header>
        </HeaderContainer>
        {children}
    </>
        
  )
}

export default MainLayOut;