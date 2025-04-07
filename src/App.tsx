import { useEffect, useState } from 'react'
import './App.css'
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import BookModal from './Components/BookModal';
import Books, { Book } from './Components/Books';
import axios from 'axios'
import ErrorMessage from './Components/ErrorMessage';

function App() {
  const [modalDisplayed, setModalDisplayed] = useState(false)
  const [books, setBooks] = useState<Book[]>([])
  const [errorMessage, setErrorMessage] = useState<string>()


  useEffect(() => {
    axios
      .get('http://localhost:3000/books', {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
      })
      .then(response => {
        setBooks(response.data)
      })
      .catch(function (error) {
        setErrorMessage(error.response.toJSON());
      })
  }, [])

  return (
    <>
      <h1>My Bookshelf</h1>
      <p className="read-the-docs">
        Keep track of the books you've read
      </p>
      <div className="card">
        <Button onClick={() => setModalDisplayed(true)}>
          Add a book
        </Button>
      </div>
      <ErrorMessage errorMessage={errorMessage} />
      <div>
        <p>
          You have read {books.length} books.
        </p>
        <Books books={books} />
      </div>
      <BookModal display={modalDisplayed} setDisplay={setModalDisplayed} books={books} setBooks={setBooks} setErrorMessage={setErrorMessage} />
    </>
  )
}

export default App
