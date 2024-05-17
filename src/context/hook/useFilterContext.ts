import {useContext} from 'react';
import FilterContext from '../FilterContext';

export const useProjectContext = () => useContext(FilterContext);
