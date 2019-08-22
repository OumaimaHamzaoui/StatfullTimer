import React from 'react'
import '../Timer/style.css'
import  { Container,Row, Col,Button } from 'react-bootstrap'
const Timer=(props)=>{
    return (
        <Container  className="main-container">
         <Row className="time" >
            <Col md={3}>
                <h1>{props.hour}</h1>
            </Col>
           
                <h1>:</h1>
            
            <Col md={3}>
                <h1>{props.minute}</h1>
            </Col>
           
                <h1>:</h1>
            
            <Col md={3}>
                <h1>{props.second}</h1>
            </Col>
            
         </Row>
         <Row className="time-indication">
            <Col >
                Hour
            </Col>
            <Col >
               minute
            </Col>
            <Col >
                second
            </Col>
            </Row>
            <Row className="buttons">
                <Col>
                <Button onClick={props.start} variant='primary'>{props.name? "Pause" : "Start"}</Button>
                </Col>
                <Col>
                <Button onClick={props.reset} variant='danger'>Reset</Button>
                </Col>
            </Row>

        
        
        </Container>

        

    )
}
export default Timer;
