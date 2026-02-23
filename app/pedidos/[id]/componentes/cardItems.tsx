import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card } from "@/components/ui/card";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Horario from "./horario";

interface cardItemProps {
  imageUrl: string;
  name: string;
  description: string;
  priceBRL: string;
  selectedServiceName?: string;
  barbershopName: string;
}

const cardItem = ({
  imageUrl,
  name,
  description,
  priceBRL,
  barbershopName,
}: cardItemProps) => {
  return (
    <div>
      <Card className="px-4 py-3 flex-row items-center flex gap-3">
        {/* Container da Imagem */}
        <div className="relative h-26 w-26 flex-none">
          <Image
            src={imageUrl}
            alt={name}
            fill
            className="rounded-lg object-cover" // O object-cover impede de esticar
          />
        </div>

        <div className="flex flex-col gap-1">
          <h1 className="font-bold">{name}</h1>
          <h1 className="text-sm text-[#666666] line-clamp-2">{description}</h1>
          <div className="flex flex-row justify-between items-center pt-1">
            <div className="text-sm font-bold">{priceBRL}</div>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant={"default"} className="rounded-full ">
                  Reservar
                </Button>
              </SheetTrigger>

              <SheetContent className="w-[95%]">
                <SheetHeader className="border-b-1 border-[#f1f1f1] py-6">
                  <SheetTitle>Fazer Reserva</SheetTitle>
                </SheetHeader>
                <div className="w-full flex justify-center">
                  <Calendar className="w-[90%] py-0" />
                </div>
                <div className="border-y-1 py-2 border-[#f1f1f1]">
                  <Horario />
                </div>

                <div className="px-4 flex justify-center">
                  <Card className="w-full py-4 px-6 flex flex-col gap-3  ">
                    <div className="flex w-full text-sm font-bold flex-row justify-between">
                      <div>
                        <h1>{name}</h1>
                      </div>
                      <div>
                        <h1>{priceBRL}</h1>
                      </div>
                    </div>
                    <div className="flex w-full text-sm text-gray-500 flex-row justify-between">
                      <div>
                        <h1>Data</h1>
                      </div>
                      <div>
                        <h1>06 de agosto</h1>
                      </div>
                    </div>
                    <div className="flex w-full text-sm text-gray-500 flex-row justify-between">
                      <div>
                        <h1>Horario</h1>
                      </div>
                      <div>
                        <h1>09:00</h1>
                      </div>
                    </div>
                    <div className="flex w-full text-sm text-gray-500 flex-row justify-between">
                      <div>
                        <h1>Barbearia</h1>
                      </div>
                      <div>
                        <h1>{barbershopName}</h1>
                      </div>
                    </div>
                  </Card>
                </div>
                <div className="px-4">
                  <Button className="w-full  rounded-full">Confirmar</Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default cardItem;
