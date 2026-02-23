import { PrismaClient } from "@/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { notFound } from "next/navigation";

import CardItem from "./componentes/cardItems";
import Number from "./componentes/number";

import Header from "./componentes/header";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// Inicializa o Prisma
const prisma = new PrismaClient({
  adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL }),
});

// Interface para o que vem da URL
interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function PedidoPage({ params }: PageProps) {
  // 1. Pega o ID da URL
  const { id } = await params;

  // 2. Busca no banco e GUARDA na variável 'barbershop'
  const barbershop = await prisma.barbershop.findUnique({
    where: { id },
  });
  const services = await prisma.barbershopService.findMany({
    where: { barbershopId: id },
    orderBy: { priceInCents: "asc" },
  });
  const corte = services.find((s) => s.name === "");

  const priceInCents = corte?.priceInCents ?? services[0]?.priceInCents ?? null;
  const priceBRL =
    priceInCents !== null
      ? (priceInCents / 100).toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })
      : null;

  // 3. Se não encontrar, para a execução e mostra 404
  if (!barbershop) {
    return notFound();
  }

  // 4. Agora a variável 'barbershop' existe e pode ser usada abaixo
  return (
    <div>
      <Header />

      <div className="bg-white w-full h-auto  z-10 relative -mt-6 rounded-t-2xl ">
        <div className="px-4 py-5">
          <div className="flex flex-row gap-3 items-center">
            <Avatar>
              <AvatarFallback>
                {barbershop.name.split(" ")[0][0]}
              </AvatarFallback>
              <AvatarImage src={barbershop.imageUrl} alt={barbershop.name} />
            </Avatar>
            <h1 className="text-xl font-bold">{barbershop.name}</h1>
          </div>

          <p className="text-gray-400">{barbershop.address}</p>
        </div>

        <div className="flex flex-col gap-1 border-y-1 border-[#f1f1f1]">
          <div className="px-4 py-5 flex-col flex gap-2">
            <h1 className="text-xs font-bold">SOBRE NÓS</h1>
            <h1 className="text-sm text-[#666666]">{barbershop.description}</h1>
          </div>
        </div>
        {/* cards */}

        <div className="px-4 py-5 flex flex-col gap-3">
          <h1 className="text-xs font-bold">Serviços</h1>
          {services.map((s) => (
            <CardItem
              key={s.id}
              imageUrl={s.imageUrl}
              name={s.name}
              description={s.description}
              barbershopName={barbershop.name}
              priceBRL={(s.priceInCents / 100).toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            />
          ))}
        </div>
        <div className="flex flex-col gap-1 border-t-1 border-[#f1f1f1]">
          <Number barbershop={barbershop} />
        </div>
      </div>
    </div>
  );
}
