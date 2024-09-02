import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

export default function TelaCadastroFornecedor() {
    return (
        <Form>
            <h1 className={"text-center"}>Cadastro de Fornecedor</h1>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="cnpjID">
                    <Form.Label>CNPJ</Form.Label>
                    <Form.Control type="cnpj" placeholder="XXX.XXX/0001-XX" />
                </Form.Group>

                <Form.Group as={Col} controlId="nomeID">
                    <Form.Label>Nome</Form.Label>
                    <Form.Control type="nome" />
                </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="telefone">
                <Form.Label>Telefone</Form.Label>
                <Form.Control placeholder="(XX)XXXX-XXXXX" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="cep">
                <Form.Label>CEP</Form.Label>
                <Form.Control placeholder="XXXXX-XXX" />
            </Form.Group>

            <Button variant="primary" type="submit">
                Cadastrar
            </Button>
        </Form>
    );
}