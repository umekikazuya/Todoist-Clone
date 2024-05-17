import {createContext} from 'react';

export type FilterContextType = {
  filter: string;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
};

const FilterContext = createContext<FilterContextType | undefined>(undefined);

export default FilterContext;
