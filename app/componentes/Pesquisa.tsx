import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";

const pesquisa = () => {
  return (
    <div className="flex flex-row justify-between gap-2 items-center">
      <Input
        placeholder="Pesquise serviços ou barbearias"
        className="rounded-full h-auto py-2 px-4 "
      />
      <Button variant={"outline"} className="rounded-full h-10 w-10">
        <SearchIcon />
      </Button>
    </div>
  );
};

export default pesquisa;
