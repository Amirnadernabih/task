import React from 'react'
import './Search.css'
import Form from 'react-bootstrap/Form';
import { Col, Container, Row } from 'react-bootstrap'
import Image from './photos/File_Document.png'
import {BiSolidDownArrow} from 'react-icons/bi'
const Search = () => {
  return (
    <Container className='container'>
      <Row className='row d-block m-3'>


        <Col>
        <h3>London Internship Program</h3>
        <p>London</p>
        </Col>



        <Col>
        <Form>
        <Form.Control
              type="text"
              placeholder="Search by name, edu, exp or #tag"
              className="form mr-sm-2"
            />
        </Form>
        </Col>



        <Col>
           <div className='filters'>
           <h5>Filters</h5>
           <p>0 Selected</p>
           </div>


           <div className='filter'>
                       <div>
                      <img src={Image} alt=''/>
                      <h6>Personal Information</h6>
                      </div>
                        <div className='arrow'>
                            <BiSolidDownArrow />
                        </div>   
           </div>



           <div className='filter'>
                    <div>
                      <img src={Image} alt=''/>
                      <h6>Education</h6>
                    </div>
                    <div className='arrow'>
                    <BiSolidDownArrow />     
                    </div>  
           </div>



           <div className='filter'>
                    <div>
                            <img src={Image} alt=''/>
                            <h6>Work Experience</h6>
                    </div>
                    <div className='arrow'>
                    <BiSolidDownArrow />
                    </div>  
           </div>



           <div className='filter'>
                        <div>
                                 <img src={Image} alt=''/>
                                 <h6>Activity Filter</h6>
                        </div>
                        <div className='arrow'>
                        <BiSolidDownArrow />
                        </div>  
           </div>



           <div className='filter'>
                    <div>
                              <img src={Image} alt=''/>
                            <h6>Advanced Filter</h6>
                    </div> 
           </div>
        </Col>



      </Row>
    </Container>
  )
}

export default Search