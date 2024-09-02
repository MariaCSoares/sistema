import TelaCadastroCategoria from "../forms/TelaCadastroCategoria";
import TelaCadastroCliente from "../forms/TelaCadastroCliente";
import TelaCadastroFornecedor from "../forms/TelaCadastroFornecedor";
import TelaCadastroUsuario from "../forms/TelaCadastroUsuario";
export default function TelaCadastros() {
    return (
        <div>
            <TelaCadastroCliente></TelaCadastroCliente>
            <TelaCadastroFornecedor></TelaCadastroFornecedor>
            <TelaCadastroUsuario></TelaCadastroUsuario>
            <TelaCadastroCategoria></TelaCadastroCategoria>
        </div>
    );
}