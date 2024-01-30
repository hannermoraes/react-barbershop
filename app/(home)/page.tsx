import { ptBR } from "date-fns/locale";
import Header from "../_components/Header";
import { format } from "date-fns"

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
      </div>

    </>
  );
}
