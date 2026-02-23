import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { CalendarIcon, HomeIcon, LogInIcon, MenuIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div className="flex flex-row justify-between">
      <Image
        src="/logo.png"
        alt="logo"
        width={0}
        height={0}
        className="h-8 w-auto"
        sizes="100vw"
      />
      <Sheet>
        <SheetTrigger asChild>
          <Button size={"icon"} variant={"outline"}>
            <MenuIcon />
          </Button>
        </SheetTrigger>
        <SheetContent className="w-[90%] ">
          <SheetHeader className="border-b-1  border-[#f1f1f1] py-6">
            <SheetTitle>Menu</SheetTitle>
          </SheetHeader>
          <div className="flex flex-row items-center justify-between px-4 py-3">
            <h1 className="font-semibold text-base">Olá. Faça seu login!</h1>
            <Button
              variant={"default"}
              className="rounded-full flex items-center"
            >
              Login
              <LogInIcon />
            </Button>
          </div>
          <div className="flex flex-col px-4 gap-3">
            <div className="flex gap-2 items-center">
              <h1>
                <HomeIcon size={16} />
              </h1>
              <p className="text-sm font-semibold">Inicio</p>
            </div>
            <div className="flex gap-2 items-center">
              <h1>
                <CalendarIcon size={16} />
              </h1>
               <Link href={`/agendamentos`}>
              <p className="text-sm font-semibold">Agendamentos</p>
              </Link>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Header;
