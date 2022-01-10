import { Nav, Navbar, Container, Button, InputGroup, FormControl, Col, Row, Stack, Modal, Image } from 'react-bootstrap';
import '../Assets/css/footer.css'
function Foot() {
    return (
        <div className="footer">
            <Container fluid >
                <Row>
                    <Col>
                        <p className="footer-p">
                        Copyright <a  href='#'>YourSite</a> All rights reserved.
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Foot;