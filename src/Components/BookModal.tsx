import { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'

function BookModal({ display, setDisplay, books, setBooks, setErrorMessage }) {
  const [validated, setValidated] = useState(false);
  const [favorited, setFavorited] = useState(false);

  const handleClose = () => {
    setDisplay(false);
    setValidated(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      setValidated(false);
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
    if (form.checkValidity() === true) {
      const newBook = { title: event.currentTarget.elements.title.value, author: event.currentTarget.elements.author.value, favorite: favorited };
      axios
        .post('http://localhost:3000/books', newBook)
        .then(response => {
          setBooks(books.concat(response.data))
        })
        .catch(function (error) {
          setErrorMessage(error.response.toJSON());
        })
      handleClose();
    }

  };

  const toggleFavorited = (event) => {
    const { checked } = event.target;
    setFavorited(checked)
  }

  return (
    <>
      <Modal show={display} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Book</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" required />
              <Form.Control.Feedback type="invalid">
                Book title is required.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="author">
              <Form.Label>Author</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="favorite">
              <Form.Check type="checkbox" label="Favorite" onChange={toggleFavorited} />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default BookModal
