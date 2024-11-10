import { Container } from 'react-bootstrap';
import { CustomLayout } from '../../components/custom-layout/CustomLayout';
import Navigation from '../../components/layout/navbar/Navbar';
import Form from 'react-bootstrap/Form';
import { PrimaryButton } from '../../components/buttons/PrimaryButton';
import Button from 'react-bootstrap/Button';
import './css/login.css';

export const Login = () => {
  
  return (
    <CustomLayout>
      {/* NAVIGATION */}
      <Navigation />

      {/* Login page */}
      <div
        className="full-height d-flex justify-content-center align-items-center"
        style={{
          background: 'linear-gradient(to bottom, #621D8E, #9E4CD6, #621D8E)',
        }}
      >
        <Container className="form-card">
          <h3 className="text-center text-white p-2" style={{ backgroundColor: '#E01C6A' }}>
            Fazer Login
          </h3>
          <Form style={{ padding: '20px' }}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Endereço de E-mail</Form.Label>
              <Form.Control type="email" placeholder="Digite aqui" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Senha</Form.Label>
              <Form.Control type="password" placeholder="Digite aqui" />
              <Form.Text className="text-white">Esqueci minha senha.</Form.Text>
            </Form.Group>

            <div className="d-flex justify-content-center">
              <PrimaryButton title="Continuar" onClick={() => {}} style={{ width: '50%' }} />
            </div>

            <br />

            <Form.Text className="text-center text-white mt-3">
              Ao continuar, você concorda com as Condições de Uso, Políticas de Privacidade e Regulamentos e Termos.
            </Form.Text>

            <p className="text-center text-white mt-3 font-bold mt-4">______ Ainda não tem uma conta? ______</p>

            <div className="d-flex justify-content-center mt-2">
              <Button href="/register" variant="outline-light" style={{ width: '50%' }}>
                Crie uma conta
              </Button>
            </div>
          </Form>
        </Container>
      </div>

      {/* CONTENT */}

      {/* FOOTER */}
    </CustomLayout>
  );
};
