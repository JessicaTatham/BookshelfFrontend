import { useState } from 'react'
import './App.css'
import { Button, Form, Modal, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function BookModal({ display, setDisplay, books, setBooks }) {
  const [validated, setValidated] = useState(false);
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
      const newBook = { title: event.currentTarget.elements.title.value, author: event.currentTarget.elements.author.value, favorite: event.currentTarget.elements.favorite.checked };
      const updatedBooks = [newBook, ...books];
      setBooks(updatedBooks);
      handleClose();
    }

  };

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
              <Form.Check type="checkbox" name="favorite" label="Favorite" />
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

function Books({ books }) {
  const displayBooks = books.map(book => {
    return (
      <tr key={book.title}>
        <td>{book.title}</td>
        <td>{book.author}</td>
        <td>{book.favorite ? 'Yes' : 'No'}</td>
      </tr>
    );
  })

  if (books.length === 0) {
    return;
  }

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>Favorite?</th>
        </tr>
      </thead>
      <tbody>
        {displayBooks}
      </tbody>
    </Table>
  )

  return displayBooks;
}

function App() {
  const [modalDisplayed, setModalDisplayed] = useState(false)
  const [books, setBooks] = useState([])

  return (
    <>
      <h1>Bookshelf</h1>
      <p className="read-the-docs">
        Keep track of the books you've read
      </p>
      <div className="card">
        <Button onClick={() => setModalDisplayed(true)}>
          Add a book
        </Button>
      </div>
      <div>
        <p>
          You have read {books.length} books
        </p>
        <Books books={books} />
      </div>
      <BookModal display={modalDisplayed} setDisplay={setModalDisplayed} books={books} setBooks={setBooks} />
    </>
  )
}

export default App
