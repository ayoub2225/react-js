import "./App.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
function App() {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="cards">
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://www.arsenal.com/sites/default/files/styles/large_16x9/public/images/Headshot_Saka_1510x850_0.jpg?auto=webp&itok=yZpptHcr"
          />
          <Card.Body>
            <Card.Title>Bukayo Saka</Card.Title>
            <Card.Text>
              Bukayo Ayoyinka Temidayo Saka is an English professional
              footballer who plays as a right winger for Premier League club
              Arsenal and the England national team. He is considered to be one
              of the best young wingers in the world.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcTOSidUk_oEGuXg3kYVpbexfpD4fm2p3QKqyziXgyJ1q7Wy-fa9xCRf1qWfIx_ruS__KjjCsvubx1kSzuI"
          />
          <Card.Body>
            <Card.Title>Martin Ødegaard</Card.Title>
            <Card.Text>
              Martin Ødegaard is a Norwegian professional footballer who plays
              as a midfielder for and captains both Premier League club Arsenal
              and the Norway national team. Considered one of the best
              midfielders in the world, he is known for his technique, dribbling
              ability, vision and range of passing.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://static.independent.co.uk/2023/07/15/13/SEI161124073.jpg"
          />
          <Card.Body>
            <Card.Title>Declan Rice</Card.Title>
            <Card.Text>
              Declan Rice is an English professional footballer who plays as a
              defensive midfielder for Premier League club Arsenal and the
              England national team. Rice began his professional career at West
              Ham United, having been released by Chelsea's academy, and
              established himself as a key first-team player
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default App;
