import { Card, Col, Row, Container, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import NavbarFrench from "../Components/navbarfrench";

export default function SupportFrench(){


  return(
    <div className="body-main">
      <NavbarFrench />

      <Container style={{padding: "50px 0px"}}>
        <h1 style={{textAlign: 'center', paddingBottom: '60px'}}>Soutien</h1>

        <Row >
          <Col md={5} style={{backgroundColor: 'white', color: 'black', borderRadius:'10px', paddingTop:'10px'}}>
            <h1 style={{textAlign: 'center', paddingBottom: '10px'}}>FAQ</h1>
            <p>
              Q. Quel est le but de ce site Web ?
              <br/>
              A. Ce site Web permet à l'utilisateur de parcourir différents composants informatiques et de voir les spécifications de chaque composant pour aider l'utilisateur à mieux déterminer
              quel composant ils veulent dans leur construction, ainsi qu'une page expliquant comment construire un ordinateur
              <br/>
              <br/>
              Q. Et si je veux acheter un composant ?
              <br/>
              A. Si vous souhaitez acheter un composant, vous pouvez copier le nom du composant dans Amazon et trouver le produit :)
              <br/>
              <br/>
              Q. Comment contacter les propriétaires de ce site Web ?
              <br/>
              A. À droite de la FAQ, il y a un formulaire que vous pouvez remplir pour poser des questions à des experts sur n'importe quoi, nous ferons de notre mieux pour répondre à toutes les questions
            </p>
          </Col>
          <Col md={2}>
          </Col>
          <Col md={5} style={{backgroundColor: 'white', color: 'black', borderRadius:'10px', paddingTop:'10px'}}>
            <h1 style={{textAlign: 'center', paddingBottom: '10px'}}>Contacter un Expert</h1>
            <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Entrez les questions que vous avez</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Adresse e-mail</Form.Label>
                <Form.Control type="email" placeholder="Entrez l'e-mail" />
                <Form.Text className="text-muted">
                  Nous ne partagerons jamais votre e-mail avec quelqu'un d'autre.
                </Form.Text>
              </Form.Group>
              <Button variant="primary" type="submit">
                Soumettre
              </Button>
            </Form>
          </Col>
        </Row>
        <Row style={{textAlign: 'center'}}>
          <Link to='/SEG3125-Project2/support'>English</Link>
        </Row>
        
      </Container>
    </div>
  );
}