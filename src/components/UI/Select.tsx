import styled from "styled-components";

interface SelectProps {
  options: { value: string; label: string }[];
  value: string;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const Select: React.FC<SelectProps> = ({ options, value, onChange = () => {} }) => {
  return (
    
    <StyledSelect value={value} onChange={onChange}>
      {options.map(option => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </StyledSelect>
  );
};

const StyledSelect = styled.select`
  width: 100%;
  padding: 4px;
  border: 1px solid #e6e6e6;
  border-radius: 4px;
  background-color: #fff;
  font-size: 14px;
`;
