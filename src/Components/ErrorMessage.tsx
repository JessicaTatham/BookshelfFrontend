import { Alert } from 'react-bootstrap';


export interface ErrorProps {
  errorMessage?: string,
}
const ErrorMessage = ({ errorMessage }: { errorMessage: ErrorProps }) => {
  console.log(errorMessage)
  if (!errorMessage) {
    return;
  }
  return (
    <Alert key="add-book-error" variant="danger">
      {/* {errorMessage} */}
    </Alert>
  )
}



export default ErrorMessage

