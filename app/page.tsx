import { PrismaClient } from "@/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import Categoria from "./componentes/categoria";
import Header from "./componentes/header";
import Pesquisa from "./componentes/Pesquisa";
import Image from "next/image";
import BarberItem from "./componentes/barberItem";
import Footer from "./componentes/footer";

const prisma = new PrismaClient({
  adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL }),
});

export default async function Home() {
  const recomendados = await prisma.barbershop.findMany({
    orderBy: { name: "asc" },
  });
  const populares = await prisma.barbershop.findMany({
    orderBy: { name: "desc" },
  });
  const services = await prisma.barbershopService.findMany({
    select: { name: true },
    distinct: ["name"],
    orderBy: { name: "asc" },
  });
  return (
    <div>
      <div className="px-3 py-4  flex  flex-col gap-4">
        <Header />
        <Pesquisa />
        <div className="flex flex-row justify-between gap-2 items-center overflow-x-auto [&::-webkit-scrollbar]:hidden ">
          {services.map((service) => (
            <Categoria key={service.name} name={service.name} />
          ))}
        </div>
        <Image
          src="/banner.png"
          alt="barbershop"
          width={0}
          height={0}
          sizes="100vw"
          className="h-auto w-[365]"
        />
        <h1 className="font-bold">Recomendados</h1>
        <div className="flex flex-row gap-4 overflow-x-auto [&::-webkit-scrollbar]:hidden">
          {recomendados.map((barbershop) => (
            <BarberItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>
        <h1 className="font-bold">Populares</h1>
        <div className="flex flex-row justify-between gap-2 items-center overflow-x-auto [&::-webkit-scrollbar]:hidden ">
          {populares.map((barbershop) => (
            <BarberItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
