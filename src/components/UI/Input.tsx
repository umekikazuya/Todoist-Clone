import styled from 'styled-components';

interface InputProps {
  value: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputText: React.FC<InputProps> = ({
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

export const InputDate: React.FC<InputProps> = ({
  value,
  onChange = () => {},
}) => {
  return (
    <StyledInputDateTime
      type="date"
      value={value}
      onChange={onChange}
    />
  );
};

export const InputTime: React.FC<InputProps> = ({
  value,
  onChange = () => {},
}) => {
  return (
    <StyledInputDateTime
      type="time"
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
