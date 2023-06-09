import { Component } from 'react';
import { Container, ListGroup, Button } from 'react-bootstrap'
import UpdateCatForm from './UpdateCatForm';


class Cats extends Component {
  render() {
    return (
      <Container>
        <ListGroup>
          {this.props.cats.map(cat => (
            <Cat cat={cat} deleteCat={this.props.deleteCat} updateCat={this.props.updateCat}/>
          ))}
        </ListGroup>
      </Container>
    )
  }
}

class Cat extends Component {
  constructor(props){
    super(props);
    this.state = {
      showForm: false
    }
  }

  render(){
    return(
      <>
      <ListGroup.Item>
      {this.props.cat.name} is {this.props.cat.color} cat
      <Button onClick={() => {this.props.deleteCat(this.props.cat._id)}}>Delete</Button>
      <Button onClick={() => { this.setState({showForm: true}) }}>Open Update Form</Button>
      </ListGroup.Item> 

      {this.state.showForm && 
        <UpdateCatForm
          cat={this.props.cat}
          updateCat={this.props.updateCat}
        />
      }
      </>
    )
  }
}


export default Cats;