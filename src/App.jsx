import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Menu from "./pages/Menu";

function App() {
  return (
    <div>
      <div className="">
        <Navbar expand="lg" className="fixed-top bg-body-tertiary shadow">
          <Container>
            <Navbar.Brand>
              <Link to="/" className="navbar-brand text-success fw-semibold">
                Restaurant
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto justify-content-end w-100">
                <Nav.Link href="/" className="active">
                  صفحه اصلی
                </Nav.Link>
                <Nav.Link href="/menu" className="">
                  منو
                </Nav.Link>
                <Nav.Link href="/about" className="">
                  درباره ما
                </Nav.Link>
                <Nav.Link href="/contact" className="">
                  ارتباط با ما
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
