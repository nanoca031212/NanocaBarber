"use client";
import type { Barbershop } from "@/generated/prisma/client";
import Image from "next/image";
import Link from "next/link";

interface SectionProps {
  barbershop: Barbershop;
}

const BarberItem = ({ barbershop }: SectionProps) => {
  return (
    <Link href={`/pedidos/${barbershop.id}`}>
      <div className="relative min-h-[200px] min-w-[290px] rounded-xl">
        <div className="absolute top-0 right-0 w-full h-full bg-linear-to-t  from-black to-transparent"></div>
        <Image
          src={barbershop.imageUrl}
          alt={barbershop.name}
          width={0}
          height={0}
          sizes="100vw"
          className="h-auto w-[365]"
        />
        <div className="absolute bottom-0 left-0 w-full h-full flex flex-col justify-end items-start  p-4">
          <h1 className="text-white font-bold text-base">{barbershop.name}</h1>
          <h1 className="text-white font-regular text-xs">
            {barbershop.address}
          </h1>
        </div>
      </div>
    </Link>
  );
};
export default BarberItem;
