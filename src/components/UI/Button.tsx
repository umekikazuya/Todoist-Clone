import styled, {css} from 'styled-components';

interface ButtonProps {
  variant: 'primary' | 'secondary';
  label: string;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({variant, label, onClick}) => {
  return (
    <StyledButton
      variant={variant}
      onClick={onClick}>
      {label}
    </StyledButton>
  );
};

interface StyledButtonProps {
  variant: 'primary' | 'secondary';
}

const StyledButton = styled.button<StyledButtonProps>`
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  outline: none;
  transition:
    background-color 0.3s,
    color 0.3s;

  ${(props) =>
    props.variant === 'primary' &&
    css`
      background-color: #007bff;
      color: white;

      &:hover {
        background-color: #0056b3;
      }
    `}

  ${(props) =>
    props.variant === 'secondary' &&
    css`
      background-color: #6c757d;
      color: white;

      &:hover {
        background-color: #545b62;
      }
    `}
`;
