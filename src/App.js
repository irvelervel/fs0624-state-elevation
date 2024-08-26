import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Col, Container, Row } from 'react-bootstrap'
import Table from './components/Table'
import Detail from './components/Detail'
import { Component } from 'react'

// se io volessi condividere la stessa informazione di stato tra Table e Detail,
// non ho alternative: devo ELEVARE questo stato e portarlo nel loro componente
// PADRE

class App extends Component {
  // "trapianto" lo stato di Table
  state = {
    selected: '', // Uno, Due o Tre
  }

  // i valori "falsy" -> '', false, 0, -0, undefined, null

  // changeState è un modo per cambiare lo stato di App
  // date un RADIOCOMANDO a Table :D
  changeState = (newSelectedValue) => {
    this.setState({
      selected: newSelectedValue, // Uno, Due o Tre
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Container>
            <Row>
              <Col>
                <Table
                  selected={this.state.selected}
                  changeState={this.changeState} // passo a Table anche una funzione
                />
              </Col>
              <Col className="my-auto">
                <Detail selected={this.state.selected} />
              </Col>
            </Row>
          </Container>
        </header>
      </div>
    )
  }
}

export default App
