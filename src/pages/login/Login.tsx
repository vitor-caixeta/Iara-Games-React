import { useContext, useState } from "react";
import { Container } from "react-bootstrap";
import { CustomLayout } from "../../components/custom-layout/CustomLayout";
import Navigation from "../../components/layout/navbar/Navbar";
import Form from "react-bootstrap/Form";
import { PrimaryButton } from "../../components/buttons/PrimaryButton";
import Button from "react-bootstrap/Button";
import "./css/login.css";
import { getUser } from "../../db";
import { AuthContext } from "../../store/AuthContext";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { isAuthenticated, setIsAuthenticatedHandler } =
    useContext(AuthContext);

  const handleSubmit = async (e: React.FormEvent) => {
    // e.preventDefault();
    // console.log({ email, password });
    e.preventDefault();
    const user = await getUser(email);

    if (user && user.password === password) {
      console.log("Login successful");
      setIsAuthenticatedHandler();
      navigate("/");
    } else {
      console.log("Invalid email or password");
      alert("Suas credenciais estão erradas.");
    }
  };

  return (
    <CustomLayout>
      <div
        className="full-height d-flex justify-content-center align-items-center"
        style={{
          background: "linear-gradient(to bottom, #621D8E, #9E4CD6, #621D8E)",
          paddingBottom: "100px",
        }}
      >
        <Container className="form-card">
          <h3
            className="text-center text-white p-2"
            style={{ backgroundColor: "#E01C6A" }}
          >
            Fazer Login
          </h3>
          <Form style={{ padding: "20px" }} onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Endereço de E-mail</Form.Label>
              <Form.Control
                type="email"
                placeholder="Digite aqui"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Senha</Form.Label>
              <Form.Control
                type="password"
                placeholder="Digite aqui"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Form.Text className="text-white">Esqueci minha senha.</Form.Text>
            </Form.Group>

            <div className="d-flex justify-content-center">
              <PrimaryButton
                title="Continuar"
                onClick={handleSubmit}
                style={{ width: "50%" }}
              />
            </div>

            <br />

            <Form.Text className="text-center text-white mt-3">
              Ao continuar, você concorda com as Condições de Uso, Políticas de
              Privacidade e Regulamentos e Termos.
            </Form.Text>

            <p className="text-center text-white font-bold mt-4">
              ______ Ainda não tem uma conta? ______
            </p>

            <div className="d-flex justify-content-center mt-2">
              <Button
                href="/register"
                variant="outline-light"
                style={{ width: "50%" }}
              >
                Crie uma conta
              </Button>
            </div>
          </Form>
        </Container>
      </div>
    </CustomLayout>
  );
};
