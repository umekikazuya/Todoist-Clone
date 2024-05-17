import FilterContext from '@/context/FilterContext';
import React, {ReactNode, useState} from 'react';

type ProviderProps = {
  children: ReactNode;
};

export const FilterProvider: React.FC<ProviderProps> = ({children}) => {
  const [filter, setFilter] = useState<string>('inbox');

  return (
    <FilterContext.Provider value={{filter, setFilter}}>
      {children}
    </FilterContext.Provider>
  );
};
