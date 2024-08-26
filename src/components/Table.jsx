import { Component } from 'react'
import { ListGroup } from 'react-bootstrap'

class Table extends Component {
  // state = {
  //   selected: '',
  // }

  // Table NON HA PIÙ selected nel proprio stato! Ma lo riceve da App nelle sue props
  checkSelected = (value) => (value === this.props.selected ? 'selected' : '')

  render() {
    return (
      <>
        <ListGroup className="text-dark">
          <ListGroup.Item
            // onClick={(e) => this.setState({ selected: 'Uno' })}
            onClick={() => this.props.changeState('Uno')}
            className={this.checkSelected('Uno')}
          >
            Uno
          </ListGroup.Item>
          <ListGroup.Item
            // onClick={(e) => this.setState({ selected: 'Due' })}
            onClick={() => this.props.changeState('Due')}
            className={this.checkSelected('Due')}
          >
            Due
          </ListGroup.Item>
          <ListGroup.Item
            // onClick={(e) => this.setState({ selected: 'Tre' })}
            onClick={() => this.props.changeState('Tre')}
            className={this.checkSelected('Tre')}
          >
            Tre
          </ListGroup.Item>
        </ListGroup>
        <p className="mt-3">
          Stato del componente: {this.props.selected || 'undefined'}
        </p>
      </>
    )
  }
}

export default Table
