import styled from 'styled-components';

interface InputTextProps {
  value: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

interface InputDateTimeProps {
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

export const InputDateTime: React.FC<InputDateTimeProps> = ({
  value,
  onChange = () => {},
}) => {
  return (
    <StyledInputDateTime
      type="datetime-local"
      value={value}
      onChange={onChange}
    />
  );
};
const StyledInputDateTime = styled.input`
  width: 100%;
  padding: 4px;
  border: 1px solid #e6e6e6;
  border-radius: 4px;
  background-color: #fff;
  font-size: 14px;
`;
