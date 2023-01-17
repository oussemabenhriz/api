import React from 'react';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListGroup from 'react-bootstrap/ListGroup';


function Carduser({posts}) {
  return (
    <div  >
 <Card style={{width:'500px' , display:'flex' , flex:'wrap'}}>
      <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
      <Card.Body>
        <Card.Title>{posts.name}</Card.Title>
        <Card.Text>
         {posts.company.catchPhrase}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>{posts.username}</ListGroup.Item>
        <ListGroup.Item>{posts.email}</ListGroup.Item>
        <ListGroup.Item>{posts.address.city}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
    
    </div>
  )
}

export default Carduser