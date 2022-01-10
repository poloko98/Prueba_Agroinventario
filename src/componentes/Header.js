import { Nav, Navbar, Container, Button, InputGroup, FormControl, Col, Row, Stack, Modal, Image } from 'react-bootstrap';

function Header() {
    return (

        <div className='header'>

            <Container fluid >
                <Row>
                    <Col>
                        <h1 className='header-h2 mt-2'>
                            HTML 5
                        </h1>
                    </Col>
                </Row>

            </Container>
        </div>
    )
}

export default Header;