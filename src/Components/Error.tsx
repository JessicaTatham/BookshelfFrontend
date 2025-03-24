import './App.css'
import { Alert } from 'react-bootstrap';


export interface ErrorProp {
  errorMessage?: string,
}
const Error = ({ errorMessage }: { errorMessage: ErrorProp }) => {
  if (!errorMessage) {
    return;
  }
  return (
    <Alert key="add-book-error" variant="danger">
      {errorMessage}
    </Alert>
  )
}



export default Error

