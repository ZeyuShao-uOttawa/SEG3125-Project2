import { Card, Col, Row, Container, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Navbar from "../Components/navbar";

export default function Support(){


  return(
    <div className="body-main">
      <Navbar />

      <Container style={{padding: "50px 0px"}}>
        <h1 style={{textAlign: 'center', paddingBottom: '60px'}}>Support</h1>

        <Row >
          <Col md={5} style={{backgroundColor: 'white', color: 'black', borderRadius:'10px', paddingTop:'10px'}}>
            <h1 style={{textAlign: 'center', paddingBottom: '10px'}}>FAQ</h1>
            <p>
              Q. What is the purpose of this website?
              <br/>
              A. This website allows user to browse through different computer components and see the specification of each component to help the user better determine 
              which component they want in their build, as well as a how to page about how to build a computer
              <br/>
              <br/>
              Q. What if I want to buy a component?
              <br/>
              A. If you want to purchase a component, you can copy the component name into amazon and find the product :)
              <br/>
              <br/>
              Q. How do I contact the owners of this website?
              <br/>
              A. To the right of the FAQ, there is a form you can fill out to ask experts questions you have about anything, we will try our best to respond to all questions
            </p>
          </Col>
          <Col md={2}>
          </Col>
          <Col md={5} style={{backgroundColor: 'white', color: 'black', borderRadius:'10px', paddingTop:'10px'}}>
            <h1 style={{textAlign: 'center', paddingBottom: '10px'}}>Contact an Expert</h1>
            <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Enter Questions You Have</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email Address</Form.Label>
                <Form.Control type="email" placeholder="Enter Email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
        <Row style={{textAlign: 'center'}}>
          <Link to='/SEG3125-Project2/supportfr'>Français</Link>
        </Row>
        
      </Container>
    </div>
  );
}