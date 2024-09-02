import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

export default function TelaCadastroUsuario() {
    return(
        <Form>
        <h1 className={"text-center"}>Cadastro de Usuário</h1>
        <br></br>

        <Row className="mb-3">
            <Form.Group as={Col} controlId="nome">
                <Form.Label>Nome</Form.Label>
                <Form.Control />
            </Form.Group>

            <Form.Group as={Col} controlId="idade">
                <Form.Label>Idade</Form.Label>
                <Form.Control />
            </Form.Group>
        </Row>

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

        <Form.Group className="mb-3" controlId="perfil">
            <Form.Label>Perfil</Form.Label>
            <Form.Control placeholder="Zezinho23" />
        </Form.Group>

        <Button variant="primary" type="submit">
            Cadastrar
        </Button>
    </Form>
    );
}
