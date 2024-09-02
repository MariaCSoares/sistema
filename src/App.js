import Pagina from "./components/layouts/Pagina";
import TelaCadastroCliente from "./components/forms/TelaCadastroCliente";
import TelaCadastros from "./components/layouts/TelaCadastros";
function App() {
  return (
    <div className="App">
      <Pagina>
        <TelaCadastros></TelaCadastros>
      </Pagina>
    </div>
  );
}

export default App;
