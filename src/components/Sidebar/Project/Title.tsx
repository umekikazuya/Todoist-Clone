import {FaChevronDown} from 'react-icons/fa';
import styled from 'styled-components';

export default function Title() {
  return (
    <>
      <StyledLabelContainer>
        <StyledLabel>マイ プロジェクト</StyledLabel>
        <StyledLabelIcon>
          <FaChevronDown />
        </StyledLabelIcon>
      </StyledLabelContainer>
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
