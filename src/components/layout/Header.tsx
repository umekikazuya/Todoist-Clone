import styled from 'styled-components';

export default function Header({title}: {title: string}): JSX.Element {
  return (
    <header>
      <StyledTitle>{title}</StyledTitle>
    </header>
  );
}

const StyledTitle = styled.div`
  color: #202020;
  font-size: 26px;
  font-weight: 700;
`;
