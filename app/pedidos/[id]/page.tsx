import { PrismaClient } from "@/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { notFound } from "next/navigation";
import Image from "next/image";
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

  // 3. Se não encontrar, para a execução e mostra 404
  if (!barbershop) {
    return notFound();
  }

  // 4. Agora a variável 'barbershop' existe e pode ser usada abaixo
  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold">Barbearia: {barbershop.name}</h1>
      <Image
        src={barbershop.imageUrl}
        alt={barbershop.name}
        width={200}
        height={200}
        className="rounded-xl"
      />
      <p className="text-gray-400">{barbershop.address}</p>
    </div>
  );
}
