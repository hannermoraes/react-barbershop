import { ptBR } from "date-fns/locale";
import Header from "../_components/Header";
import { format } from "date-fns"
import Search from "./_components/search";
import BookingItem from "../_components/booking-item";

export default function Home() {
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
      </div>

    </>
  );
}
