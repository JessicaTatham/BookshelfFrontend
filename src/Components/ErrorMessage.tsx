import { Alert } from 'react-bootstrap';


export interface ErrorProps {
  errorMessage?: string,
}
const ErrorMessage: React.FC<ErrorProps> = ({ errorMessage }) => {
  console.log(errorMessage)
  if (!errorMessage) {
    return;
  }
  return (
    <Alert key="add-book-error" variant="danger">
      <p>{errorMessage}</p>
    </Alert>
  )
}



export default ErrorMessage

