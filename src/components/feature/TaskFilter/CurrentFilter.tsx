import { useTaskFilterContext } from "@/context/hook";

export default function CurrentTaskFilter() {
  const context = useTaskFilterContext();
  let label: string = '';
  label = '';
  
  if (context?.currentTaskFilter?.name) {
    label = context?.currentTaskFilter?.name ?? '';
  }

  return <>{label}</>;
}
