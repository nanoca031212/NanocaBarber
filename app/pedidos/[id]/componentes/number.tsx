import { Button } from "@/components/ui/button";
import { PhoneIcon } from "lucide-react";

interface numberProps {
  barbershop: {
    phones: string[];
  };
}

const number = ({ barbershop }: numberProps) => {
  return (
    <div>
      <div className="px-4 py-5 flex-col flex gap-3">
        <h1 className="text-xs font-bold">CONTATO</h1>
        {barbershop.phones.map((phone, index) => (
          <div
            className="flex flex-row justify-between items-center"
            key={index}
          >
            <h1 className="text-sm text-[#666666 flex items-center gap-4">
              <PhoneIcon />
              {phone}
            </h1>
            <div>
              <Button variant={"outline"} className="rounded-full ">
                Copiar
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default number;
