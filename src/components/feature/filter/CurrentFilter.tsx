import {getFilterLabel} from '@/utils/helpers';
import {useFilterContext} from '@/context/hook';

export default function CurrentFilter() {
  const filter = useFilterContext();
  let label: string = '';
  label = '';
  if (filter?.filter) {
    label = getFilterLabel(filter.filter) ?? '';
  }

  return <>{label}</>;
}
