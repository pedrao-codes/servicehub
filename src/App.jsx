import Select from './components/Select'
import StaticCard from './components/StaticCard'
import StatusBadge from './components/StatusBadge'

import {
  Search,
  SquareUser,
  TicketCheck,
  CircleCheck,
  CircleX,
  ChevronDown,
} from 'lucide-react'

function App() {
  const cidades = ['Campinas', 'São Paulo']
  const tipoServico = ['Elétrica', 'Hidráulica']
  const status = ['Todos', 'Ativos', 'Indisponíveis']
  const statusStyles = {
    Ativo: {
      icon: CircleCheck,
      color: 'bg-green-500',
    },
    Indisponível: {
      icon: CircleX,
      color: 'bg-orange-500',
    },
  }

  const prestadores = [
    {
      nome: 'Pedro Rocha',
      servico: 'TI / Suporte',
      cidade: 'Campinas',
      telefone: '(19) 98100-6096',
      status: 'Ativo',
    },
    {
      nome: 'Brenda Cruz',
      servico: 'Compras',
      cidade: 'Campinas',
      telefone: '(19) 98200-6096',
      status: 'Ativo',
    },
    {
      nome: 'Ákila Silva',
      servico: 'Astronauta',
      cidade: 'Campinas',
      telefone: '(19) 98300-6096',
      status: 'Indisponível',
    },
  ]

  return (
    <>
      <header className="bg-blue-600 w-screen py-8 px-16">
        <span className="text-white font-logo font-bold text-4xl">
          ServiceHub
        </span>
      </header>
      <main>
        <section className="bg-white card-shadow card-space flex items-end gap-4">
          <Select name="Cidade" values={cidades} className="contained" />
          <Select
            name="Tipo de Serviço"
            values={tipoServico}
            className="contained"
          />
          <Select name="Status" values={status} className="contained" />

          <div className="relative">
            <Search
              className="text-gray-400 absolute left-3 -translate-y-1/2 top-1/2 pointer-events-none"
              size={16}
            />
            <input
              type="text"
              placeholder="Buscar"
              className="input-base w-96 pl-10"
            />
          </div>

          <button className="btn btn-primary contained">
            + Adicionar Técnico
          </button>
        </section>

        <section className="card-shadow card-space w-full flex gap-8">
          <StaticCard
            label="Total de Técnicos"
            value={56}
            Icon={SquareUser}
            className="bg-blue-500"
          />
          <StaticCard
            label="Ativos"
            value={56}
            Icon={statusStyles.Ativo.icon}
            className={statusStyles.Ativo.color}
          />
          <StaticCard
            label="Indisponíveis"
            value={56}
            Icon={statusStyles.Indisponível.icon}
            className={statusStyles.Indisponível.color}
          />
          <StaticCard
            label="Chamados em aberto"
            value={56}
            Icon={TicketCheck}
            className="bg-purple-500"
          />
        </section>
        <section className="card card-space card-shadow bg-gray-100">
          <h1 className="text-gray-700  text-2xl pb-4">Lista de Prestadores</h1>

          <div className="card card-shadow bg-white">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-gray-100 rounded-t-2xl">
                  <th className="py-4 pl-8 font-semibold">
                    Nome <ChevronDown className="inline-block" />
                  </th>
                  <th className="py-4 pl-8 font-semibold">
                    Serviço <ChevronDown className="inline-block" />
                  </th>
                  <th className="py-4 pl-8 font-semibold">
                    Cidade <ChevronDown className="inline-block" />
                  </th>
                  <th className="py-4 pl-8 font-semibold">
                    Telefone <ChevronDown className="inline-block" />
                  </th>
                  <th className="py-4 pl-8 font-semibold">
                    Status <ChevronDown className="inline-block" />
                  </th>
                  <th className="py-4 pl-8 font-semibold"></th>
                </tr>
              </thead>
              <tbody>
                {prestadores.map((prestador, key) => (
                  <tr
                    key={prestador.telefone}
                    className="border-t border-gray-300"
                  >
                    <td className="py-4 pl-8 font-bold">{prestador.nome}</td>
                    <td className="py-2 pl-8">{prestador.servico}</td>
                    <td className="py-2 pl-8">{prestador.cidade}</td>
                    <td className="py-2 pl-8">{prestador.telefone}</td>
                    <td className="py-2 pl-8">
                      <StatusBadge
                        status={prestador.status}
                        Icon={statusStyles[prestador.status].icon}
                        className={
                          statusStyles[prestador.status].color +
                          ' card flex w-min py-2 px-4 gap-2 text-white'
                        }
                      />
                    </td>
                    <td className="flex">
                      <button className="btn-ghost text-4xl text-gray-400 hover:text-black">
                        ...
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
