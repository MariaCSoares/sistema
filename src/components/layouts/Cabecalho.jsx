import { Alert } from "react-bootstrap";

export default function Cabecalho(props) {
    return (
        <Alert className={"text-center"} variant="primary">{props.titulo || "Título não fornecido"}</Alert>
    );
}