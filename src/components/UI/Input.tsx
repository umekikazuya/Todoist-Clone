import styled from 'styled-components';

interface InputTextProps {
  value: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputText: React.FC<InputTextProps> = ({
  value,
  onChange = () => {},
}) => {
  return (
    <StyledInputText
      type="text"
      value={value}
      onChange={onChange}
    />
  );
};

const StyledInputText = styled.input`
  width: 100%;
  padding: 5px;
  border: 1px solid #ddd;
  border-radius: 3px;
  background-color: #fff;
  font-size: 14px;
`;
