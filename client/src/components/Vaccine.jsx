import React from 'react'
import { Card, CardBody, CardText } from 'react-bootstrap'
import { Row,Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import VaccineCard from './VaccineCard.jsx'
import Header from './Header.jsx'
import drives from '../drives.js'


const Vaccine = () => {
  return (

    <>
    <Header/>

    <h1>
            Latest Vaccines
            <Row>
                {
                //  console.log(drives[0])   
                drives.map((vaccine)=>(
                    <Col key={vaccine.id} sm={12} md={6} lg={4} xl={4}>                        
                    <VaccineCard vaccine={vaccine}/>
                    
                    </Col>
                ))
                }
            </Row>
        </h1>
</>
  )
}

export default Vaccine