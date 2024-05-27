import {FaChevronDown} from 'react-icons/fa';
import styled from 'styled-components';
import {AddProject} from './AddProject';
import ProjectList from './ProjectList';

export default function Project() {
  return (
    <>
      <div>
        <StyledLabelContainer>
          <StyledLabel>マイ プロジェクト</StyledLabel>
          <StyledLabelIcon>
            <FaChevronDown />
          </StyledLabelIcon>
        </StyledLabelContainer>
        <ProjectList />
        <AddProject />
      </div>
    </>
  );
}

const StyledLabelContainer = styled.div`
  display: flex;
  align-items: center;
`;

const StyledLabel = styled.div`
  font-weight: 600;
  color: #666;
`;

const StyledLabelIcon = styled.div`
  display: flex;
  justify-content: center;
  margin-left: auto;
  color: #666;
`;
