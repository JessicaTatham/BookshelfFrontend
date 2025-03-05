import { useState } from 'react'
import './App.css'
import { Button, Form, Modal } from 'react-bootstrap';

function BookModal({ display, setDisplay }) {
  const handleClose = () => setDisplay(false);
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Modal show={display} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add Book</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Author</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Favorite" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  )
}

function App() {
  const [count, setCount] = useState(0)
  const [modalDisplayed, setModalDisplayed] = useState(false)

  return (
    <>
      <h1>Bookshelf</h1>
      <div className="card">
        <Button onClick={() => setModalDisplayed(true)}>
          Add a book
        </Button>
        <p>
          You have read {count} books
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <BookModal display={modalDisplayed} setDisplay={setModalDisplayed} />
    </>
  )
}

export default App
