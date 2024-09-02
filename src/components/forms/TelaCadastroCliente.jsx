import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

export default function TelaCadastroCliente(props) {
    return (  
        <Form>
            <h1 className={"text-center"}>Cadastro de Clientes</h1>
            <br></br>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="jose@outlook.com" />
                </Form.Group>

                <Form.Group as={Col} controlId="senha">
                    <Form.Label>Senha</Form.Label>
                    <Form.Control type="password" placeholder="Senha" />
                </Form.Group>
            </Row>

            <Row className="mb-3">
                <Form.Group as={Col} controlId="nome">
                    <Form.Label>Nome</Form.Label>
                    <Form.Control />
                </Form.Group>

                <Form.Group as={Col} controlId="sobrenome">
                    <Form.Label>Sobrenome</Form.Label>
                    <Form.Control />
                </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="cpf">
                <Form.Label>CPF</Form.Label>
                <Form.Control placeholder="XXX.XXX.XXX-XX" />
            </Form.Group>

            <Row className="mb-3">
                <Form.Group as={Col} controlId="cidade">
                    <Form.Label>Cidade</Form.Label>
                    <Form.Control />
                </Form.Group>

                <Form.Group as={Col} controlId="cep">
                    <Form.Label>CEP</Form.Label>
                    <Form.Control />
                </Form.Group>
            </Row>

            <Button variant="primary" type="submit">
                Cadastrar
            </Button>
        </Form>
    );
}
