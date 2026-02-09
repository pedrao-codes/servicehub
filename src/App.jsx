import Select from './components/Select'
import { Search } from 'lucide-react'

function App() {
  const cidades = ['Campinas', 'São Paulo']
  const tipoServico = ['Elétrica', 'Hidráulica']
  const status = ['Todos', 'Ativos', 'Indisponíveis']

  return (
    <>
      <header className="bg-blue-600 w-screen py-8 px-16">
        <span className="text-white font-logo font-bold text-4xl">
          ServiceHub
        </span>
      </header>
      <main>
        <section className="bg-white card-shadow card-spaces flex items-end gap-4">
          <Select name="Cidade" values={cidades} className="contained" />
          <Select
            name="Tipo de Serviço"
            values={tipoServico}
            className="contained"
          />
          <Select name="Status" values={status} className="contained" />

          <div className="relative">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 top-1/2
                       text-gray-400 -translate-y-1/2 text-gray-400 pointer-events-none"
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
      </main>
    </>
  )
}

export default App
