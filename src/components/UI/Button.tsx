import styled, {css} from 'styled-components';

type ButtonProps = {
  variant: 'primary' | 'secondary';
  label: string;
  onClick?: () => void;
};

export const Button: React.FC<ButtonProps> = ({variant, label, onClick}) => {
  return (
    <StyledButton
      $variant={variant}
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          onClick;
        }
      }}>
      {label}
    </StyledButton>
  );
};

type StyledButtonProps = {
  $variant: 'primary' | 'secondary';
};

const StyledButton = styled.button<StyledButtonProps>`
  font-weight: bold;
  font-size: 13px;
  justify-content: center;
  border-radius: 5px;
  max-width: 100%;
  min-width: 68px;
  padding: 0 12px;
  line-height: 32px;
  transition-duration: 0.3s;
  transition-property: color, background-color;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  white-space: nowrap;
  display: flex;
  align-items: center;

  &:active {
    transform: scale(0.97);
    transition: transform 0.2s cubic-bezier(0.02, 1.505, 0.745, 1.235);
  }

  ${(props) =>
    props.$variant === 'primary' &&
    css`
      background-color: #db4c3f;
      color: #fff;

      &:hover {
        background-color: #c3392c;
        color: #fff;
      }
    `}

  ${(props) =>
    props.$variant === 'secondary' &&
    css`
      background-color: #f5f5f5;
      color: #555;

      &:hover {
        background-color: #e5e5e5;
        color: #1a1a1a;
      }
    `}
`;
