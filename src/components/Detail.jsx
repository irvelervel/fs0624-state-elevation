import { Alert } from 'react-bootstrap'

const Detail = (props) => {
  return (
    <Alert variant="success">
      {props.selected || 'Nessun valore selezionato'}
    </Alert>
  )
}

export default Detail
