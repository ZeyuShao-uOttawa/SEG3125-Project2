import { Container, Row, Col, Table, Form, Button } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import Navbar from "../Components/navbar";
import Modal from "../Components/modal";

export default function Component(props){
  const [modalShow, setModalShow] = React.useState(false);
  const [selectedObject, setSelectedObject] = React.useState([]);
  
  let specs = ['Name', 'Core Count', 'Base Clock', 'Boost Clock', 'TDP', 'Rating', 'Price (CAD)'];
  let cpus = [
    [
      'Ryzen 9 5900x',
      '12',
      '3.7 GHz',
      '4.8 GHz',
      '105 W',
      '5.0 Stars',
      '499.00'
    ],
    [
      'Ryzen 7 5800x',
      '8',
      '3.8 GHz',
      '4.7 GHz',
      '105 W',
      '5.0 Stars',
      '360.95'
    ],
    [
      'Ryzen 5 5600x',
      '6',
      '3.7 GHz',
      '4.6 GHz',
      '65 W',
      '4.7 Stars',
      '251.50'
    ],
    [
      'Ryzen 3 4100',
      '4',
      '3.8 GHz',
      '4.0 GHz',
      '65 W',
      '4.8 Stars',
      '178.41'
    ],
    [
      'Intel Core i9-12900K',
      '16',
      '3.2 GHz',
      '5.2 GHz',
      '125 W',
      '4.5 Stars',
      '719.99'
    ],
    [
      'Intel Core i7-12700K',
      '12',
      '3.6 GHz',
      '5.0 GHz',
      '125 W',
      '5.0 Stars',
      '506.50'
    ],
    [
      'Intel Core i5-12600K',
      '10',
      '3.7 GHz',
      '4.9 GHz',
      '125 W',
      '4.9 Stars',
      '359.50'
    ],
    [
      'Intel Core i3-12400F',
      '4',
      '2.5 GHz',
      '4.4 GHz',
      '65 W',
      '4.3 Stars',
      '223.50'
    ]
  ];

  let maxPrice = 1000;
  const [price, setPrice] = React.useState(maxPrice);
  const [filterCPU, setfilterCPU] = React.useState(cpus);
  
  function handleChange(e){
    // console.log(e.target.id);
    // console.log(e.target.checked);
    // console.log(document.getElementById('filter-amd').checked);
    let filteredCPU = cpus;

    let checkAMD = document.getElementById('filter-amd').checked
    let checkIntel = document.getElementById('filter-intel').checked

    if((checkAMD && checkIntel) || (!checkAMD && !checkIntel)){
      filteredCPU = cpus;
    }else if(checkAMD){
      filteredCPU = [cpus[0], cpus[1], cpus[2], cpus[3]];
    }else if(checkIntel){
      filteredCPU = [cpus[4], cpus[5], cpus[6], cpus[7]];
    }

    if(e.target.id == 'price-range'){
      maxPrice = e.target.valueAsNumber;

      let tempFilter = [];

      for(let i = 0; i < filteredCPU.length; i++){
        if(parseInt(filteredCPU[i][6]) < maxPrice){
          tempFilter.push(filteredCPU[i]);
        }
      }
      setPrice(maxPrice);
      filteredCPU = tempFilter;
    }

    setfilterCPU(filteredCPU);
  };

  function reset(){
    document.getElementById('filter-amd').checked = false;
    document.getElementById('filter-intel').checked = false;
    document.getElementById('price-range').value = 1000;

    setPrice(1000);
    setfilterCPU(cpus);
  }

  useEffect(() => {
    if(props.filter !== 'none'){
      let fil = 'filter-' + props.filter;
      document.getElementById(fil).checked = true;

      if(props.filter === 'amd'){
        setfilterCPU([cpus[0], cpus[1], cpus[2], cpus[3]]);
      }else{
        setfilterCPU([cpus[4], cpus[5], cpus[6], cpus[7]]);
      }
    }
  }, []);


  return(
    <div className="body-main">
      <Navbar />
      <header className='component-header'>
        {props.type}
      </header>
      <Container className='component-table'>
        <Row>
          <Col>
            <Container>
              <h3>Filters</h3>
              <Form>
                <Form.Label>Max Price</Form.Label>
                <Form.Range id='price-range' min='0' max='1000' defaultValue='1000' onChange={e => handleChange(e)}/>
                <Form.Label>${price}</Form.Label>
                <h1></h1>

                <Form.Label>Manufacturer</Form.Label>
                <Form.Check 
                  type='checkbox'
                  id='filter-amd'
                  label='AMD'
                  onChange={e => handleChange(e)}
                />

                <Form.Check 
                  type='checkbox'
                  id='filter-intel'
                  label='Intel'
                  onChange={e => handleChange(e)}
                />

                <h1></h1>
                <Button variant='danger' onClick={() => reset()}>Reset Filters</Button>
                
              </Form>
            </Container>
          </Col>
          <Col>
            <Table striped bordered hover responsive variant='light' style={{width: '52vw'}}>
              <thead>
                <tr>
                  <th>#</th>
                {Array.from({ length: specs.length }).map((_, index) => (
                  <th key={index}>{specs[index]}</th>
                ))}
                </tr>
              </thead>
              <tbody>
                {Array.from({ length: filterCPU.length }).map((_, index) => (
                  <tr onClick={() => {setModalShow(true); setSelectedObject(filterCPU[index])}} style={{cursor: 'pointer'}}>
                  <td>{index}</td>
                  {Array.from({ length: specs.length }).map((_, index2) => (
                    <td key={index2}>{filterCPU[index][index2]}</td>
                  ))}
                </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>

        <Modal
          object={selectedObject}
          specs={specs}
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </Container>
  </div>
  );
}