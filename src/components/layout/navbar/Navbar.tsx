import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faSignInAlt,
  faCartShopping,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { AuthContext } from "../../../store/AuthContext";
import { InputGroup, NavDropdown } from "react-bootstrap";
import Stack from "react-bootstrap/Stack";
import "./css/navbar.css";

function Navigation() {
  const { isAuthenticated, setIsAuthenticatedHandler } =
    useContext(AuthContext);

  return (
    <Navbar
      className="custom-navbar"
      expand="lg"
      style={{ backgroundColor: "#1D0031" }}
    >
      <Container className="custom-container">
        <Navbar.Brand href="/" className="nav-link">
          <svg
            width="80"
            height="68"
            viewBox="0 0 111 94"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M55.9997 91.866C69.3314 91.5358 82.6577 88.9952 92.5495 80.7383C102.932 72.0721 109.617 59.9203 109.749 47C109.883 33.9695 103.743 21.3325 93.2471 12.6178C83.2339 4.30384 69.4061 1.18311 55.9997 2.37145C43.7826 3.45437 34.4889 11.1541 25.2791 18.6425C15.1153 26.9066 2.63602 34.5768 1.11227 47C-0.520253 60.3101 6.57071 73.7182 17.4347 82.5985C27.7729 91.0492 42.1956 92.2078 55.9997 91.866Z"
              fill="white"
            />
            <path
              d="M69.9379 71.1864C71.9661 71.1864 73.6103 69.6687 73.6103 67.7966C73.6103 65.9244 71.9661 64.4067 69.9379 64.4067C67.9098 64.4067 66.2656 65.9244 66.2656 67.7966C66.2656 69.6687 67.9098 71.1864 69.9379 71.1864Z"
              fill="#5F1B8C"
            />
            <path
              d="M82.7915 83.0509C84.8196 83.0509 86.4638 81.5332 86.4638 79.6611C86.4638 77.7889 84.8196 76.2712 82.7915 76.2712C80.7633 76.2712 79.1191 77.7889 79.1191 79.6611C79.1191 81.5332 80.7633 83.0509 82.7915 83.0509Z"
              fill="#5F1B8C"
            />
            <path
              d="M82.7915 59.322C84.8196 59.322 86.4638 57.8043 86.4638 55.9322C86.4638 54.06 84.8196 52.5424 82.7915 52.5424C80.7633 52.5424 79.1191 54.06 79.1191 55.9322C79.1191 57.8043 80.7633 59.322 82.7915 59.322Z"
              fill="#5F1B8C"
            />
            <path
              d="M35.0506 62.7118V57.6271H27.706V62.7118C27.706 63.6491 26.8834 64.4067 25.8698 64.4067H20.3613V71.1864H25.8698C26.8834 71.1864 27.706 71.944 27.706 72.8813V77.9661H35.0506V72.8813C35.0506 71.944 35.8732 71.1864 36.8868 71.1864H42.3952V64.4067H36.8868C35.8732 64.4067 35.0506 63.6491 35.0506 62.7118Z"
              fill="#5F1B8C"
            />
            <path
              d="M83.2427 42.3729H58.9209V22.8814C58.9209 19.6102 61.8037 16.9492 65.3475 16.9492C68.8912 16.9492 71.774 19.6102 71.774 22.8814V28.8136C71.774 33.4864 75.8925 37.2881 80.9548 37.2881C86.0171 37.2881 90.1356 33.4864 90.1356 28.8136V1.69492C90.1356 0.757627 89.313 0 88.2994 0C87.2859 0 86.4633 0.757627 86.4633 1.69492V28.8136C86.4633 31.6169 83.9918 33.8983 80.9548 33.8983C77.9178 33.8983 75.4463 31.6169 75.4463 28.8136V22.8814C75.4463 17.7424 70.9165 13.5593 65.3475 13.5593C59.7784 13.5593 55.2486 17.7424 55.2486 22.8814V42.3729H29.491C14.3316 42.3729 2 53.7559 2 67.7492C2 79.8661 11.5645 92.9559 25.8021 93.1254L26.1859 93.1271C30.0822 93.1271 36.6538 92.5186 43.4127 90.8102C51.2494 88.8271 61.5062 88.8288 69.3154 90.8085C75.9678 92.4983 83.4759 93.1271 86.6451 93.1271L86.9352 93.1254C98.189 92.9475 110.333 83.1949 110.333 67.7492C110.333 53.7559 98.1798 42.3729 83.2427 42.3729ZM82.791 49.1525C86.8415 49.1525 90.1356 52.1932 90.1356 55.9322C90.1356 59.6712 86.8415 62.7119 82.791 62.7119C78.7404 62.7119 75.4463 59.6712 75.4463 55.9322C75.4463 52.1932 78.7404 49.1525 82.791 49.1525ZM46.0678 72.8814C46.0678 73.8186 45.2452 74.5763 44.2316 74.5763H38.7232V79.661C38.7232 80.5983 37.9006 81.3559 36.887 81.3559H25.8701C24.8565 81.3559 24.0339 80.5983 24.0339 79.661V74.5763H18.5254C17.5119 74.5763 16.6893 73.8186 16.6893 72.8814V62.7119C16.6893 61.7746 17.5119 61.017 18.5254 61.017H24.0339V55.9322C24.0339 54.9949 24.8565 54.2373 25.8701 54.2373H36.887C37.9006 54.2373 38.7232 54.9949 38.7232 55.9322V61.017H44.2316C45.2452 61.017 46.0678 61.7746 46.0678 62.7119V72.8814ZM53.4124 52.5424C52.3989 52.5424 51.5763 51.7847 51.5763 50.8475C51.5763 49.9102 52.3989 49.1525 53.4124 49.1525H61.9157C62.9292 49.1525 63.7518 49.9102 63.7518 50.8475C63.7518 51.7847 62.9292 52.5424 61.9157 52.5424H53.4124ZM69.9379 74.5763C65.8873 74.5763 62.5932 71.5356 62.5932 67.7966C62.5932 64.0576 65.8873 61.017 69.9379 61.017C73.9884 61.017 77.2825 64.0576 77.2825 67.7966C77.2825 71.5356 73.9884 74.5763 69.9379 74.5763ZM82.791 86.4407C78.7404 86.4407 75.4463 83.4 75.4463 79.661C75.4463 75.922 78.7404 72.8814 82.791 72.8814C86.8415 72.8814 90.1356 75.922 90.1356 79.661C90.1356 83.4 86.8415 86.4407 82.791 86.4407ZM95.6441 74.5763C91.5935 74.5763 88.2994 71.5356 88.2994 67.7966C88.2994 64.0576 91.5935 61.017 95.6441 61.017C99.6946 61.017 102.989 64.0576 102.989 67.7966C102.989 71.5356 99.6946 74.5763 95.6441 74.5763Z"
              fill="#5F1B8C"
            />
            <path
              d="M95.644 71.1864C97.6722 71.1864 99.3163 69.6687 99.3163 67.7966C99.3163 65.9244 97.6722 64.4067 95.644 64.4067C93.6158 64.4067 91.9717 65.9244 91.9717 67.7966C91.9717 69.6687 93.6158 71.1864 95.644 71.1864Z"
              fill="#5F1B8C"
            />
          </svg>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="navbarScroll"
          className="custom-toggler"
        />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "200px" }}
            navbarScroll
          >
            <InputGroup>
              <Form.Control
                type="search"
                placeholder="Search"
                aria-label="Search"
                className="bg-white"
              />
              <Button variant="light">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </Button>
            </InputGroup>
          </Nav>

          <Stack className="ms-auto" direction="horizontal" gap={5}>
            {!isAuthenticated && (
              <>
                <Nav.Link href="/register" className="nav-link">
                  <FontAwesomeIcon icon={faUser} /> Faça Registro
                </Nav.Link>
                <Nav.Link href="/login" className="nav-link">
                  <FontAwesomeIcon icon={faSignInAlt} /> Login
                </Nav.Link>
              </>
            )}
            {isAuthenticated && (
              <>
                <div className="flex items-center text-white">
                  <FontAwesomeIcon className="mr-3" icon={faUser} />

                  <NavDropdown title="Sua Conta" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/favorites">
                      Favoritos
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item
                      onClick={() => setIsAuthenticatedHandler()}
                    >
                      Logout
                    </NavDropdown.Item>
                  </NavDropdown>
                </div>
              </>
            )}
            <Nav.Link href="/cart" className="nav-link">
              <FontAwesomeIcon icon={faCartShopping} />
            </Nav.Link>
          </Stack>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
