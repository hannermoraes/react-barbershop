import { ptBR } from "date-fns/locale";
import { format } from "date-fns"
import Header from "../_components/Header";
import Search from "./_components/search";
import BookingItem from "../_components/booking-item";
import { db } from "../_lib/prisma";
import BarbershopItem from "./_components/barbershop-item";
import { Key } from "react";

export default async function Home() {

  const barbershops = await db.barbershop.findMany({})

  return (
    <>
      <div>
        <Header />
        <div className="px-5 pt-5">
          <h2 className="text-xl font-bold">Olá Hanner!</h2>
          <p className="text-sm">
            <span className="capitalize">
              {format(new Date(), "EEEE',' dd", { locale: ptBR })}
            </span>
            {' de '}
            <span className="capitalize">
              {format(new Date(), "MMMM", { locale: ptBR })}
            </span>
          </p>
        </div>
        <div className="px-4 mt-6">
          <Search />
        </div>

        <div className="px-5 mt-6">
          <h2 className="text-xs uppercase text-gray-400 mb-3">Agendamentos</h2>
          <BookingItem />
        </div>

        <div className="mt-6">
          <h2 className="px-5 text-xs uppercase text-gray-400 mb-3">Recomendados</h2>
          <div className="flex px-5 gap-4 overflow-x-auto [&::-webkit-scrollbar]:hidden">
            {barbershops.map((barbershop: { id: Key | null | undefined; }) => (
              <BarbershopItem key={barbershop.id} barbershop={barbershop} />
            ))}
          </div>
        </div>
        <div className="mt-6 mb-[4.5rem]">
          <h2 className="px-5 text-xs uppercase text-gray-400 mb-3">Populares</h2>
          <div className="flex px-5 gap-4 overflow-x-auto [&::-webkit-scrollbar]:hidden">
            {barbershops.map((barbershop: { id: Key | null | undefined; }) => (
              <BarbershopItem key={barbershop.id} barbershop={barbershop} />
            ))}
          </div>
        </div>

      </div>

    </>
  );
}
