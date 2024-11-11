import React from "react";
import { CustomLayout } from "../../components/custom-layout/CustomLayout";
import { Container } from "react-bootstrap";

const Favorites = () => {
  return (
    <CustomLayout>
      <div
        className="full-height d-flex justify-content-center align-items-center"
        style={{
          background: "linear-gradient(to bottom, #621D8E, #9E4CD6, #621D8E)",
          paddingBottom: "100px",
        }}
      >
        <Container className="register-form-card">
          <div className="p-2 flex items-center justify-between" style={{ backgroundColor: "#E01C6A" }}>
            <div className="flex items-center gap-8">
              <div>
                <h5>Sua Lista</h5>
              </div>
              <div>
                <h5>Seus Amigos</h5>
              </div>
            </div>
            <div className="flex items-center gap-8">
              <div>
                <h6>Compartilhar lista</h6>
              </div>
              <div>
                <h6>Editar lista</h6>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </CustomLayout>
  );
};

export default Favorites;
