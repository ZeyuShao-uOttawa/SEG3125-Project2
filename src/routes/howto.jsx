import { Card, Col, Row, Container, Carousel } from 'react-bootstrap';
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

export default function Howto(){
  const cara = {
    height: '600px', 
    backgroundColor: 'white', 
    color: 'black', 
    textAlign: 'center'
  }

  return(
    <div className="body-main">
      <Navbar />

      <Container style={{padding: "60px 0px"}}>
        <h1 style={{textAlign: 'center', paddingBottom: '60px'}}>How to Build a Computer</h1>
        <Carousel variant="dark" interval={null}>
          <Carousel.Item>
            <Container style={cara}>
              <h1 style={{paddingTop: '25px'}}>Step One: Picking a CPU</h1>
              <Card.Img variandt="top" src={CPU} style={{height: '250px', width: '250px', marginTop: '50px'}}/>
            </Container>
            <Carousel.Caption>
              <h5>Before anything, you must first find a CPU you want</h5>
              <p>Everything within a computer is built around the CPU, so picking the right CPU for you is the most important step, depending on your budget and the purpose of your computer</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Container style={cara}>
              <h1 style={{paddingTop: '25px'}}>Step Two: Picking a Motherboard</h1>
              <Card.Img variandt="top" src={Motherboard} style={{height: '250px', width: '250px', marginTop: '50px'}}/>
            </Container>
            <Carousel.Caption>
              <h5>After picking a CPU, you must then find a motherboard that is compatible with the CPU</h5>
              <p>Each motherboard is all pretty similar to eachother, with each different one offering small tweaks, so you can go and find a compatible motherboard with the tweaks you want</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Container style={cara}>
            <h1 style={{paddingTop: '25px'}}>Step Three: Choosing Memory</h1>
            <Card.Img variandt="top" src={Memory} style={{height: '250px', width: '250px', marginTop: '50px'}}/>
            </Container>
            <Carousel.Caption>
              <h5>Memory (or RAM) is next up, you must find memory that is compatible with both your CPU and motherboard</h5>
              <p>A lot of the widely used memory these days are all compatible with most CPUs and motherboards, so it is your choice to pick the speed and amount of memory that suits you</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Container style={cara}>
            <h1 style={{paddingTop: '25px'}}>Step Four: Choosing a Video Card</h1>
            <Card.Img variandt="top" src={GPU} style={{height: '250px', width: '250px', marginTop: '50px'}}/>
            </Container>
            <Carousel.Caption>
              <h5>The video card (or GPU) is very important expecially if your CPU does not have integrated graphics</h5>
              <p>The video card you choose depends on what you want to do with the computer and your budget, try to find something in between of the two</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Container style={cara}>
            <h1 style={{paddingTop: '25px'}}>Step Five: Finding Storage</h1>
            <Card.Img variandt="top" src={Storage} style={{height: '250px', width: '250px', marginTop: '50px'}}/>
            </Container>
            <Carousel.Caption>
              <h5>Storage is the place where you store all your files</h5>
              <p>There are different types of storages, hard disk drives or solid state drives, the former providing storage over speed, and the latter providing speed over storage for the price</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Container style={cara}>
            <h1 style={{paddingTop: '25px'}}>Step Six: Finding a Power Supply</h1>
            <Card.Img variandt="top" src={PSU} style={{height: '250px', width: '250px', marginTop: '50px'}}/>
            </Container>
            <Carousel.Caption>
              <h5>Now we need to find a power supply to power the computer</h5>
              <p>To find the right power supply for you, you must find out how much power your components use all together, and also each power supply has different efficiency ratings, so pick one that you like and is within your budget</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Container style={cara}>
            <h1 style={{paddingTop: '25px'}}>Step Seven: Identifying a Case</h1>
            <Card.Img variandt="top" src={Case} style={{height: '250px', width: '250px', marginTop: '50px'}}/>
            </Container>
            <Carousel.Caption>
              <h5>Cases are not necessary, but almost every PC builder recommends</h5>
              <p>There are cases of all shapes and sizes, first you must find what case fits all your components, and then decide if you like the design and airflow of the case</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Container style={cara}>
            <h1 style={{paddingTop: '25px'}}>Step Eight: Identifying a Monitor</h1>
            <Card.Img variandt="top" src={Monitor} style={{height: '250px', width: '250px', marginTop: '50px'}}/>
            </Container>
            <Carousel.Caption>
              <h5>If you want to see what you are doing, you need a monitor</h5>
              <p>Many monitors exist for different purposes, each with different display resolutions and speeds, so you can match up your purpose to a monitor you like</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Container style={cara}>
            <h1 style={{paddingTop: '25px'}}>Congratulations!!!</h1>
            <h2 style={{paddingTop: '25px'}}>You have now constructed your very own computer</h2>
            </Container>
            <Carousel.Caption>
              <h5>Now whats left is to find peripherals you want</h5>
              <p>This site doesn't not list the countless different peripherals that exist, but you can go of on your own to find peripherals you would like to have for your computer</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>
    </div>
  );
}