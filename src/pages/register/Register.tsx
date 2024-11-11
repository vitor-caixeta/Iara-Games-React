import React, { useContext, useState } from "react";
import { Container } from "react-bootstrap";
import { CustomLayout } from "../../components/custom-layout/CustomLayout";
import Navigation from "../../components/layout/navbar/Navbar";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { PrimaryButton } from "../../components/buttons/PrimaryButton";
import { getUser, addUser } from "./../../db";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../store/AuthContext";

export const Register: React.FC = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    birthDay: "",
    birthMonth: "",
    birthYear: "",
    country: "Brasil",
    language: "Português (Brasil)",
    zipCode: "",
    state: "São Paulo",
    emailNotifications: false,
    interestAds: false,
    agreement: false,
  });

  const navigate = useNavigate();
  const { isAuthenticated, setIsAuthenticatedHandler } =
    useContext(AuthContext);
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { id, value, type, checked } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [id]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    e.preventDefault();
    const existingUser = await getUser(formValues.email);

    if (existingUser) {
      console.log("User already exists");
      alert("Esse usuário já existe");
      return;
    }

    await addUser(formValues);
    setIsAuthenticatedHandler();
    navigate("/");
    console.log("User registered successfully");
  };

  return (
    <CustomLayout>
      <div
        className="h-full w-full flex justify-center items-center pt-[40px]"
        style={{
          background: "linear-gradient(to bottom, #621D8E, #9E4CD6, #621D8E)",
          paddingBottom: "100px",
        }}
      >
        <Container className="register-form-card">
          <h3
            className="text-center text-white p-2"
            style={{ backgroundColor: "#E01C6A" }}
          >
            Criar Conta
          </h3>
          <Form style={{ padding: "20px" }} onSubmit={handleSubmit}>
            <div className="flex gap-[40px]">
              <div className="flex-1">
                <Form.Group className="mb-3" controlId="name">
                  <Form.Label>Seu nome</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Nome e Sobrenome"
                    value={formValues.name}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="username">
                  <Form.Label>Nome de Usuário</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Pelo menos 8 caracteres"
                    value={formValues.username}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="email">
                  <Form.Label>Endereço de e-mail</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Endereço de e-mail"
                    value={formValues.email}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="password">
                  <Form.Label>Senha</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Digite aqui"
                    value={formValues.password}
                    onChange={handleChange}
                  />
                  <Form.Text className="text-white">
                    *A senha deve conter pelo menos 8 caracteres, uma letra
                    maiúscula, um número e um caractere especial (@$!%*?&)
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="confirmPassword">
                  <Form.Label>Confirme a senha</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Repita a senha"
                    value={formValues.confirmPassword}
                    onChange={handleChange}
                  />
                </Form.Group>
              </div>
              <div className="flex-1">
                <Row className="mb-3">
                  <Form.Label>Data de Nascimento</Form.Label>
                  <Form.Group as={Col} controlId="birthDay">
                    <Form.Control
                      type="number"
                      placeholder="Dia"
                      value={formValues.birthDay}
                      onChange={handleChange}
                    />
                  </Form.Group>

                  <Form.Group as={Col} controlId="birthMonth">
                    <Form.Control
                      placeholder="Mês"
                      value={formValues.birthMonth}
                      onChange={handleChange}
                    />
                  </Form.Group>

                  <Form.Group as={Col} controlId="birthYear">
                    <Form.Control
                      type="number"
                      placeholder="Ano"
                      value={formValues.birthYear}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Row>

                <Row className="mb-3">
                  <Form.Group as={Col} controlId="country">
                    <Form.Label>País/Região</Form.Label>
                    <Form.Control
                      placeholder="Brasil"
                      value={formValues.country}
                      onChange={handleChange}
                    />
                  </Form.Group>

                  <Form.Group as={Col} controlId="language">
                    <Form.Label>Idioma</Form.Label>
                    <Form.Control
                      placeholder="Português (Brasil)"
                      value={formValues.language}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Row>

                <Row className="mb-3">
                  <Form.Group as={Col} controlId="zipCode">
                    <Form.Label>CEP</Form.Label>
                    <Form.Control
                      placeholder="__-__"
                      value={formValues.zipCode}
                      onChange={handleChange}
                    />
                  </Form.Group>

                  <Form.Group as={Col} controlId="state">
                    <Form.Label>Estado</Form.Label>
                    <Form.Control
                      placeholder="São Paulo"
                      value={formValues.state}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Row>

                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="emailNotifications"
                >
                  <Col>
                    <Form.Check
                      label="Quero receber notificações por e-mail."
                      checked={formValues.emailNotifications}
                      onChange={handleChange}
                    />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="interestAds">
                  <Col>
                    <Form.Check
                      label="Quero receber anúncios baseados em meus interesses."
                      checked={formValues.interestAds}
                      onChange={handleChange}
                    />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="agreement">
                  <Col>
                    <Form.Check
                      label="Concordo com as Condições de Uso, Políticas de Privacidade e Regulamentos e Termos."
                      checked={formValues.agreement}
                      onChange={handleChange}
                    />
                  </Col>
                </Form.Group>
              </div>
            </div>
            <div className="d-flex justify-content-center mt-[20px]">
              <PrimaryButton
                title="Registrar"
                onClick={handleSubmit}
                style={{ width: "50%" }}
              />
            </div>
          </Form>
        </Container>
      </div>
    </CustomLayout>
  );
};