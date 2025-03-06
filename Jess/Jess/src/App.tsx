import { useState } from 'react'
import './App.css'
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import BookModal from './Components/BookModal';
import Books, { Book } from './Components/Books';

function App() {
  const [modalDisplayed, setModalDisplayed] = useState(false)
  const [books, setBooks] = useState<Book[]>([])

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
