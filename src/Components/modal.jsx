import { Modal, Button } from 'react-bootstrap';

function modal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.object[0]}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Specs</h4>
        {Array.from({ length: props.specs.length }).map((_, index) => (
          <p key={index}>{props.specs[index]}: {props.object[index]}</p>
        ))}
        <h4>Price (CAD)</h4>
        <p>
          Amazon: {props.object[6]}
          <br/>
          Best Buy: {(parseInt(props.object[6]) + 50.59)}
          <br/>
          Newegg: {(parseInt(props.object[6]) + 100.59)}
        </p>
        <h4>Reviews</h4>
        <p>
          This product is great, it is definitely worth you money. I've been having problems with my previous CPU and after installing this new one, my computer has
          not run into any issues, as well as being much faster then before.
          <br/>
          With that being said, I will conclude with a statement that I, and a close friend of mine agree with thoroughly, "val bad game"
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default modal;