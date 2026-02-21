import { Badge } from "@/components/ui/badge";

interface CategoriaProps {
  name: string;
}

const categoria = ({ name }: CategoriaProps) => {
  return (
    <Badge variant={"outline"} className=" px-2 py-1 text-sm">
      {name}
    </Badge>
  );
};

export default categoria;
