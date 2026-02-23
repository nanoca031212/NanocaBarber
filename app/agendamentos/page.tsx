import React from "react";
import Header from "../componentes/header";
import CardAgendamento from "./componentes/cardAgendamento";

const page = () => {
  return (
    <div className="p-4">
      <Header />
      <div className="text-xl font-semibold py-6">
        <h1>Agendamentos</h1>
      </div>
      <div className=" py-6 flex flex-col gap-2">
        <h1 className="text-xs font-semibold">CONFIRMADO</h1>

        <CardAgendamento />
      </div>
    </div>
  );
};

export default page;
