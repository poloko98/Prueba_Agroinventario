import { Nav, Navbar, Container, Button, InputGroup, FormControl, Col, Row, Stack, Modal, Image } from 'react-bootstrap';
import '../Assets/css/nav.css'
function Bar() {
    return (
        <div className='nav'>
            <Navbar expand="md" variant="dark">
                <Container fluid>
                    <Row>
                        <Nav >
                            <Nav.Link href="#">Link 1</Nav.Link>
                            <Nav.Link href="#">Link 2</Nav.Link>
                            <Nav.Link href="#">Link 3</Nav.Link>
                            <Nav.Link href="#">Link 4</Nav.Link>
                            <Nav.Link href="#">Link 5</Nav.Link>
                        </Nav>
                    </Row>
                </Container>
            </Navbar>
        </div>
    )

}

export default Bar;
