import { Nav, Navbar, Container, Button, InputGroup, FormControl, Col, Row, Stack, Modal, Image } from 'react-bootstrap';
import '../Assets/css/sidebar.css'
function Side() {
    return (
        <div className="sidebar">
            <Container fluid>
                <Row>
                    <h5 className='mt-4'>
                        Sidebar Links
                    </h5>
                    <hr />
                </Row>
                <Container Fluid>
                    <Row>
                        <a className="o-link" href='#'>Link 1</a>
                        <a href='#'>Link 2</a>
                        <a href='#'>Link 3</a>
                        <a href='#'>Link 4</a>
                        <a href='#'>Link 5</a>
                    </Row>
                </Container>
                <Row>
                    <h5 className='mt-4'>
                        Other Widgets
                    </h5>
                    <hr />
                </Row>
                <Container fluid>
                    <Row>
                        <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius;
                            dignissim elementum. Mollis tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare.
                            Hendrerit parturient habitant pharetra rutrum gravida porttitor eros feugiat. Mollis elit
                            sodales taciti duis praesent id. Consequat urna vitae morbi nunc congue.
                        </p>
                    </Row>
                </Container>



            </Container>

        </div>
    )
}

export default Side;