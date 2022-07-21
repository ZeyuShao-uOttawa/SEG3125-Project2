import { Card, Col, Row, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Navbar from "../Components/navbar";
import CPU from '../image/CPU.png';
import GPU from '../image/GPU.jpg';
import Memory from '../image/Memory.jpg';
import Motherboard from '../image/Motherboard.png';
import Storage from '../image/Storage.jpg';
import PSU from '../image/PSU.png';
import Case from '../image/Case.jpeg';
import Monitor from '../image/Monitor.jpg';


export default function Home(){
  let names = ['CPU', 'GPU', 'Memory', 'Motherboard', 'Storage', 'Power Supplies', 'Case', 'Monitor'];
  let img = [CPU, GPU, Memory, Motherboard, Storage, PSU , Case, Monitor];
  let links = ['/SEG3125-Project2/component/cpu', '/SEG3125-Project2/component/cpu', '/SEG3125-Project2/component/cpu', '/SEG3125-Project2/component/cpu', '/SEG3125-Project2/component/cpu', '/SEG3125-Project2/component/cpu', '/SEG3125-Project2/component/cpu', '/SEG3125-Project2/component/cpu'];

  return(
    <div className="body-main">
      
      <Navbar />

      <Container style={{padding: "100px 00px"}}>
        <Row xs={1} md={4} className="g-4">
          {Array.from({ length: 8 }).map((_, idx) => (
            <Col>
              <Card>
                <Link to={links[idx]} className='router-link'>
                  <Card.Img variandt="top" src={img[idx]} style={{height: '288px'}}/>
                  <Card.Header>
                    <Card.Title>{names[idx]}</Card.Title>
                  </Card.Header>
                </Link>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}