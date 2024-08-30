import Pagina from "./components/layouts/Pagina";

function App() {
  return (
    <div className="App">
      <Pagina>
        <h1>Esta é a página de cadastro de clientes</h1>
      </Pagina>

      <Pagina>
        <h1>Esta é a página de cadastro de produtos</h1>
      </Pagina>

      <Pagina>
        <h1>Esta é a página de cadastro de fornecedores</h1>
      </Pagina>
    </div>
  );
}

export default App;
