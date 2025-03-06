import { Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export interface Book {
  title: string,
  author?: string,
  favorite?: boolean
}

function Books({ books }: { books: Book[] }) {
  if (books.length === 0) {
    return;
  }

  const displayBooks = books.map((book: Book) => {
    return (
      <tr key={book.title}>
        <td>{book.title}</td>
        <td>{book.author}</td>
        <td>{book.favorite ? 'Yes' : 'No'}</td>
      </tr>
    );
  })

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

export default Books
