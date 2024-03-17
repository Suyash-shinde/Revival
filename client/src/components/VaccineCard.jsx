import React from 'react'
import { Card, CardBody, CardText } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const VaccineCard = ({vaccine}) => {
  return (
    <Card className='my-3 p-3 rounded'>
        {/* <Link to={`/vaccine/${vaccine._id}`}>
            <Card.Img src={product.image} variant="top"/>
        </Link> */}
        <CardBody>
        <Link to={`/vaccine/${vaccine.id}`}>
            <Card.Title as='div'>
                <strong>{vaccine.name}</strong>
                </Card.Title>
            </Link>
        </CardBody>
        <CardText as='h3'>
        Pune
        </CardText>
    </Card>
    
  )
}

export default VaccineCard