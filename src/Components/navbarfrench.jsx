import { Navbar, Nav, Container, NavDropdown, Dropdown, Row, Col } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';
import Logo from '../image/logo.png';


import './CSS/navbar.css'

function LinkContainerDropdown(props){
  return(
    <NavDropdown.Item>
      <LinkContainer to={props.route}>
        <Nav.Link>{props.name}</Nav.Link>
      </LinkContainer>
    </NavDropdown.Item>
  );
}

function navbarFrench() {
  const margin = {
    margin: '0px 40px',
  }

  return (
    <Navbar bg="light" expand="lg">
    <Container fluid>
    
      <LinkContainer to="/SEG3125-Project2/" style={margin}>
        <Navbar.Brand><img src={Logo} style={{height:'30px'}}/> PC Component World</Navbar.Brand>
      </LinkContainer>
      
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          
          <LinkContainer to="/SEG3125-Project2/" style={{margin:'0px 40px 0px 0px'}}>
            <Nav.Link>Maison</Nav.Link>
          </LinkContainer>

          <NavDropdown title="CPU" id="navbarScrollingDropdown">
            <LinkContainerDropdown route="/SEG3125-Project2/component/cpu" name="All"/> 
            <LinkContainerDropdown route="/SEG3125-Project2/component/cpu_amd" name="AMD"/>
            <LinkContainerDropdown route="/SEG3125-Project2/component/cpu_intel" name="Intel"/>   
          </NavDropdown>

          <NavDropdown title="GPU" id="navbarScrollingDropdown">
            <LinkContainerDropdown route="/SEG3125-Project2/component/cpu" name="All"/>
            <LinkContainerDropdown route="/SEG3125-Project2/component/cpu" name="AMD"/>
            <LinkContainerDropdown route="/SEG3125-Project2/component/cpu" name="Nvidia"/>
          </NavDropdown>

          <NavDropdown title="Mémoire" id="navbarScrollingDropdown">
            <LinkContainerDropdown route="/SEG3125-Project2/component/cpu" name="All"/>
            <LinkContainerDropdown route="/SEG3125-Project2/component/cpu" name="Crucial"/>
            <LinkContainerDropdown route="/SEG3125-Project2/component/cpu" name="Corsair"/>
            <LinkContainerDropdown route="/SEG3125-Project2/component/cpu" name="G.Skill"/>
            <LinkContainerDropdown route="/SEG3125-Project2/component/cpu" name="Kingston"/>
          </NavDropdown>

          <NavDropdown title="Carte mère" id="navbarScrollingDropdown">
            <LinkContainerDropdown route="/SEG3125-Project2/component/cpu" name="All"/>
            <LinkContainerDropdown route="/SEG3125-Project2/component/cpu" name="ASRock"/>
            <LinkContainerDropdown route="/SEG3125-Project2/component/cpu" name="Asus"/>
            <LinkContainerDropdown route="/SEG3125-Project2/component/cpu" name="EVGA"/>
            <LinkContainerDropdown route="/SEG3125-Project2/component/cpu" name="Gigabyte"/>
            <LinkContainerDropdown route="/SEG3125-Project2/component/cpu" name="MSI"/>
          </NavDropdown>

          <NavDropdown title="Stockage" id="navbarScrollingDropdown">
            <LinkContainerDropdown route="/SEG3125-Project2/component/cpu" name="All"/>
            <LinkContainerDropdown route="/SEG3125-Project2/component/cpu" name="Crucial"/>
            <LinkContainerDropdown route="/SEG3125-Project2/component/cpu" name="Kingston"/>
            <LinkContainerDropdown route="/SEG3125-Project2/component/cpu" name="Samsung"/>
            <LinkContainerDropdown route="/SEG3125-Project2/component/cpu" name="Seagate"/>
            <LinkContainerDropdown route="/SEG3125-Project2/component/cpu" name="Western Digital"/>
          </NavDropdown>

          <NavDropdown title="Alimentations" id="navbarScrollingDropdown">
            <LinkContainerDropdown route="/SEG3125-Project2/component/cpu" name="All"/>
            <LinkContainerDropdown route="/SEG3125-Project2/component/cpu" name="Asus"/>
            <LinkContainerDropdown route="/SEG3125-Project2/component/cpu" name="Cooler Master"/>
            <LinkContainerDropdown route="/SEG3125-Project2/component/cpu" name="Corsair"/>
            <LinkContainerDropdown route="/SEG3125-Project2/component/cpu" name="EVGA"/>
            <LinkContainerDropdown route="/SEG3125-Project2/component/cpu" name="Gigabyte"/>
            <LinkContainerDropdown route="/SEG3125-Project2/component/cpu" name="MSI"/>
            <LinkContainerDropdown route="/SEG3125-Project2/component/cpu" name="SeaSonic"/>
          </NavDropdown>

          <NavDropdown title="Cas" id="navbarScrollingDropdown">
            <LinkContainerDropdown route="/SEG3125-Project2/component/cpu" name="All"/>
            <LinkContainerDropdown route="/SEG3125-Project2/component/cpu" name="Cooler Master"/>
            <LinkContainerDropdown route="/SEG3125-Project2/component/cpu" name="Corsair"/>
            <LinkContainerDropdown route="/SEG3125-Project2/component/cpu" name="Lian Li"/>
            <LinkContainerDropdown route="/SEG3125-Project2/component/cpu" name="MSI"/>
            <LinkContainerDropdown route="/SEG3125-Project2/component/cpu" name="NZXT"/>
          </NavDropdown>

          <NavDropdown title="Moniteur" id="navbarScrollingDropdown" style={{margin:'0px 40px 0px 0px'}}>
            <LinkContainerDropdown route="/SEG3125-Project2/component/cpu" name="All"/>
            <LinkContainerDropdown route="/SEG3125-Project2/component/cpu" name="Acer"/>
            <LinkContainerDropdown route="/SEG3125-Project2/component/cpu" name="Alienware"/>
            <LinkContainerDropdown route="/SEG3125-Project2/component/cpu" name="AOC"/>
            <LinkContainerDropdown route="/SEG3125-Project2/component/cpu" name="Asus"/>
            <LinkContainerDropdown route="/SEG3125-Project2/component/cpu" name="Dell"/>
            <LinkContainerDropdown route="/SEG3125-Project2/component/cpu" name="LG"/>
            <LinkContainerDropdown route="/SEG3125-Project2/component/cpu" name="MSI"/>
            <LinkContainerDropdown route="/SEG3125-Project2/component/cpu" name="Samgsung"/>
          </NavDropdown>

          <LinkContainer to="/SEG3125-Project2/howto" style={{margin:'0px 10px 0px 0px'}}>
            <Nav.Link>Comment</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/SEG3125-Project2/support" style={{margin_left:'0px'}}>
            <Nav.Link>Soutien</Nav.Link>
          </LinkContainer>
        </Nav>
        {/* <Form className="d-flex" style={margin}>
          <FormControl style={{ width:'300px' }}
            type="search"
            placeholder="Search For PC Components"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
        </Form> */}

        {/* <Nav
          className="my-2 my-lg-0"
          style={margin}
          navbarScroll
        >
          
          <LinkContainer to="/SEG3125-Project2/">
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>

        </Nav> */}

    </Navbar.Collapse>
  </Container>
</Navbar>
    
  );
}

export default navbarFrench;