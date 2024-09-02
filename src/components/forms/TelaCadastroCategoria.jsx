import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

export default function TelaCadastroCategoria() {
    return (
        <Form>
            <h1 className={"text-center"}>Cadastro de Categoria</h1>
            <br></br>

            <Row className="mb-3">
                <Form.Group as={Col} controlId="item">
                    <Form.Label>Item</Form.Label>
                    <Form.Control />
                </Form.Group>

                <Form.Group as={Col} controlId="quantidade">
                    <Form.Label>Quantidade</Form.Label>
                    <Form.Control />
                </Form.Group>
            </Row>

            <Row className="mb-3">
                <Form.Group as={Col} controlId="valor">
                    <Form.Label>Valor</Form.Label>
                    <Form.Control type="email" placeholder="R$XX,XX" />
                </Form.Group>
            </Row>

            <Button variant="primary" type="submit">
                Cadastrar
            </Button>
        </Form>
    );
}
