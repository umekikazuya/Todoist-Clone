import {useContext} from 'react';
import TaskFilterContext from '../TaskFilterContext';

export const useTaskFilterContext = () => useContext(TaskFilterContext);
