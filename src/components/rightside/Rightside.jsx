import React , { useState }from 'react'
import './Rightside.css'
import Nav from 'react-bootstrap/Nav';

import { Card,  Form } from "react-bootstrap";
import { Col, Container, Row } from 'react-bootstrap'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Button from 'react-bootstrap/Button';


const Rightside = () => {
    const [checked, setChecked] = useState([]);
    const handleChange = (e) => {
      const { value, checked } = e.target;
      if (checked) {
        setChecked([...checked, value]);
      } else {
        setChecked(checked.filter((item) => item !== value));
      }
    };
  return (
    <Container>
        <Row >
            <Col className='frstcol d-flex justify-content-around align-items-center p-2 '>
         <span>
         <DropdownButton id="dropdown-basic-button" title="Opportunity Browsing">
      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </DropdownButton></span>   
      <span className='frstcol2 d-flex'>
      <Button className='btn1' variant="light"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M12.9601 5.28003L19.3426 11.6625C20.1001 12.42 20.1001 13.6425 19.3426 14.4L13.7701 19.9725C13.0126 20.73 11.7901 20.73 11.0326 19.9725L4.65008 13.59C4.29008 13.23 4.08008 12.735 4.08008 12.225V6.65253C4.08008 5.58753 4.95008 4.71753 6.01508 4.71753H11.5876C12.1051 4.71753 12.6001 4.92003 12.9601 5.28003Z" stroke="#444444" stroke-width="0.7" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.5801 10.2525C9.15585 10.2525 9.6226 9.7858 9.6226 9.21004C9.6226 8.63428 9.15585 8.16754 8.5801 8.16754C8.00434 8.16754 7.5376 8.63428 7.5376 9.21004C7.5376 9.7858 8.00434 10.2525 8.5801 10.2525Z" stroke="#444444" stroke-width="0.7" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg></Button>
      <Button className='btn1' variant="light"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M15 19C15 16.7909 12.3137 15 9 15C5.68629 15 3 16.7909 3 19M17 14L21 10M17 10L21 14M9 12C6.79086 12 5 10.2091 5 8C5 5.79086 6.79086 4 9 4C11.2091 4 13 5.79086 13 8C13 10.2091 11.2091 12 9 12Z" stroke="#A80000" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
</svg></Button>
      <Button className='btn1' variant="light"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M15 19C15 16.7909 12.3137 15 9 15C5.68629 15 3 16.7909 3 19M21 10L17 14L15 12M9 12C6.79086 12 5 10.2091 5 8C5 5.79086 6.79086 4 9 4C11.2091 4 13 5.79086 13 8C13 10.2091 11.2091 12 9 12Z" stroke="#0B0B0B" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
</svg></Button>
      <Button className='btn1' variant="light"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M15 19C15 16.7909 12.3137 15 9 15C5.68629 15 3 16.7909 3 19M16.8281 5.17163C17.1996 5.54307 17.4942 5.98402 17.6952 6.46932C17.8962 6.95463 17.9998 7.47469 17.9998 7.99997C17.9998 8.52526 17.8963 9.04543 17.6953 9.53073C17.4943 10.016 17.1996 10.457 16.8281 10.8285M19 3C19.6566 3.65661 20.1775 4.43612 20.5328 5.29402C20.8882 6.15192 21.071 7.07134 21.071 7.99993C21.071 8.92851 20.8881 9.84808 20.5327 10.706C20.1774 11.5639 19.6566 12.3435 19 13.0001M9 12C6.79086 12 5 10.2091 5 8C5 5.79086 6.79086 4 9 4C11.2091 4 13 5.79086 13 8C13 10.2091 11.2091 12 9 12Z" stroke="#0B0B0B" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
</svg></Button>
      <Button className='btn1' variant="light"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M4 6L12.2286 12L19.9999 6M21 8.19995V15.8C21 16.9201 21.0002 17.4802 20.7822 17.908C20.5905 18.2844 20.2841 18.5902 19.9078 18.782C19.48 19 18.9203 19 17.8002 19H6.2002C5.08009 19 4.51962 19 4.0918 18.782C3.71547 18.5902 3.40973 18.2844 3.21799 17.908C3 17.4802 3 16.9201 3 15.8V8.19995C3 7.07985 3 6.51986 3.21799 6.09204C3.40973 5.71572 3.71547 5.40973 4.0918 5.21799C4.51962 5 5.08009 5 6.2002 5H17.8002C18.9203 5 19.48 5 19.9078 5.21799C20.2841 5.40973 20.5905 5.71572 20.7822 6.09204C21.0002 6.51986 21 7.07985 21 8.19995Z" stroke="#0B0B0B" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
</svg></Button>
      </span>
     <span>
     <Button variant="primary">interview</Button>
     </span>

            </Col>
            <Col >
            
            <Card className='col22'>
        <Card.Header className='heddd d-flex justify-content-between align-items-center'><Button onClick={() => setChecked(["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"])}>Select All</Button><Nav variant="pills" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link href="/home">Qualified</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">Tasks</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="disabled" disabled>
          Disqualified
        </Nav.Link>
      </Nav.Item>
    </Nav></Card.Header>
        <Card.Body className='coll'>
          <Form >
            <span className='formmm p-4 d-flex justify-content-center align-items-center '>
                <span className='d-flex justify-content-center align-items-center'>
                <Form.Check
              type="checkbox"
              id="checkbox1"
              name="checkboxGroup"
              value="1"
            //   label="Option 1"
              checked={checked.includes("1")}
              onChange={handleChange}
            />
            <p className='iii'>AN</p>
                </span>
                <span className='m-auto'>
                <h1>Aaliyah Sanderson</h1>
            <h4>Riyadh, Saudi Arabia</h4>
            <p>Bachelor - Cambridge University 2023 - 2023</p>
            <a href='##'>#top_candidate</a>
                </span>
            </span>
           
            <span className='formmm p-4 d-flex justify-content-center align-items-center'>
                <span className='d-flex justify-content-center align-items-center'>
                <Form.Check
              type="checkbox"
              id="checkbox2"
              name="checkboxGroup"
              value="2"
              
              checked={checked.includes("2")}
              onChange={handleChange}
            />
            <p className='iii'>AN</p>
                </span>
                <span className='m-auto'>
                <h1>Aaliyah Sanderson</h1>
            <h4>Riyadh, Saudi Arabia</h4>
            <p>Bachelor - Cambridge University 2023 - 2023</p>
            <a href='##'>#top_candidate</a>
                </span>
            </span>
            <span className='formmm p-4 d-flex justify-content-center align-items-center'>
                <span className='d-flex justify-content-center align-items-center'>
                <Form.Check
              type="checkbox"
              id="checkbox3"
              name="checkboxGroup"
              value="3"
              checked={checked.includes("3")}
              onChange={handleChange}
            />
            <p className='iii'>AN</p>
                </span>
                <span className='m-auto'>
                <h1>Aaliyah Sanderson</h1>
            <h4>Riyadh, Saudi Arabia</h4>
            <p>Bachelor - Cambridge University 2023 - 2023</p>
            <a href='##'>#top_candidate</a>
                </span>
            </span>
            <span className='formmm p-4 d-flex justify-content-center align-items-center'>
                <span className='d-flex justify-content-center align-items-center'>
                <Form.Check
              type="checkbox"
              id="checkbox4"
              name="checkboxGroup"
              value="4"
              
              checked={checked.includes("4")}
              onChange={handleChange}
            />
            <p className='iii'>AN</p>
                </span>
                <span className='m-auto'>
                <h1>Aaliyah Sanderson</h1>
            <h4>Riyadh, Saudi Arabia</h4>
            <p>Bachelor - Cambridge University 2023 - 2023</p>
            <a href='##'>#top_candidate</a>
                </span>
            </span>
            <span className='formmm p-4 d-flex justify-content-center align-items-center'>
                <span className='d-flex justify-content-center align-items-center'>
                <Form.Check
              type="checkbox"
              id="checkbox5"
              name="checkboxGroup"
              value="5"
           
              checked={checked.includes("5")}
              onChange={handleChange}
            />
            <p className='iii'>AN</p>
                </span>
                <span className='m-auto'>
                <h1>Aaliyah Sanderson</h1>
            <h4>Riyadh, Saudi Arabia</h4>
            <p>Bachelor - Cambridge University 2023 - 2023</p>
            <a href='##'>#top_candidate</a>
                </span>
            </span>
            <span className='formmm p-4 d-flex justify-content-center align-items-center'>
                <span className='d-flex justify-content-center align-items-center'>
                <Form.Check
              type="checkbox"
              id="checkbox6"
              name="checkboxGroup"
              value="6"
              
              checked={checked.includes("6")}
              onChange={handleChange}
            />
            <p className='iii'>AN</p>
                </span>
                <span className='m-auto'>
                <h1>Aaliyah Sanderson</h1>
            <h4>Riyadh, Saudi Arabia</h4>
            <p>Bachelor - Cambridge University 2023 - 2023</p>
            <a href='##'>#top_candidate</a>
                </span>
            </span>
            <span className='formmm p-4 d-flex justify-content-center align-items-center'>
                <span className='d-flex justify-content-center align-items-center'>
                <Form.Check
              type="checkbox"
              id="checkbox7"
              name="checkboxGroup"
              value="7"
             
              checked={checked.includes("7")}
              onChange={handleChange}
            />
            <p className='iii'>AN</p>
                </span>
                <span className='m-auto'>
                <h1>Aaliyah Sanderson</h1>
            <h4>Riyadh, Saudi Arabia</h4>
            <p>Bachelor - Cambridge University 2023 - 2023</p>
            <a href='##'>#top_candidate</a>
                </span>
            </span>
            <span className='formmm p-4 d-flex justify-content-center align-items-center'>
                <span className='d-flex justify-content-center align-items-center'>
                <Form.Check
              type="checkbox"
              id="checkbox8"
              name="checkboxGroup"
              value="8"
             
              checked={checked.includes("8")}
              onChange={handleChange}
            />
            <p className='iii'>AN</p>
                </span>
                <span className='m-auto'>
                <h1>Aaliyah Sanderson</h1>
            <h4>Riyadh, Saudi Arabia</h4>
            <p>Bachelor - Cambridge University 2023 - 2023</p>
            <a href='##'>#top_candidate</a>
                </span>
            </span>
            <span className='formmm p-4 d-flex justify-content-center align-items-center'>
                <span className='d-flex justify-content-center align-items-center'>
                <Form.Check
              type="checkbox"
              id="checkbox9"
              name="checkboxGroup"
              value="9"
              
              checked={checked.includes("9")}
              onChange={handleChange}
            />
            <p className='iii'>AN</p>
                </span>
                <span className='m-auto'>
                <h1>Aaliyah Sanderson</h1>
            <h4>Riyadh, Saudi Arabia</h4>
            <p>Bachelor - Cambridge University 2023 - 2023</p>
            <a href='##'>#top_candidate</a>
                </span>
            </span>
            <span className='formmm p-4 d-flex justify-content-center align-items-center'>
                <span className='d-flex justify-content-center align-items-center'>
                <Form.Check
              type="checkbox"
              id="checkbox10"
              name="checkboxGroup"
              value="10"
             
              checked={checked.includes("10")}
              onChange={handleChange}
            />
            <p className='iii'>AN</p>
                </span>
                <span className='m-auto'>
                <h1>Aaliyah Sanderson</h1>
            <h4>Riyadh, Saudi Arabia</h4>
            <p>Bachelor - Cambridge University 2023 - 2023</p>
            <a href='##'>#top_candidate</a>
                </span>
            </span>
            <span className='formmm p-4 d-flex justify-content-center align-items-center'>
                <span className='d-flex justify-content-center align-items-center'>
                <Form.Check
              type="checkbox"
              id="checkbox11"
              name="checkboxGroup"
              value="11"
             
              checked={checked.includes("11")}
              onChange={handleChange}
            />
            <p className='iii'>AN</p>
                </span>
                <span className='m-auto'>
                <h1>Aaliyah Sanderson</h1>
            <h4>Riyadh, Saudi Arabia</h4>
            <p>Bachelor - Cambridge University 2023 - 2023</p>
            <a href='##'>#top_candidate</a>
                </span>
            </span>
            <span className='formmm p-4 d-flex justify-content-center align-items-center'>
                <span className='d-flex justify-content-center align-items-center'>
                <Form.Check
              type="checkbox"
              id="checkbox12"
              name="checkboxGroup"
              value="12"
              
              checked={checked.includes("12")}
              onChange={handleChange}
            />
            <p className='iii'>AN</p>
                </span>
                <span className='m-auto'>
                <h1>Aaliyah Sanderson</h1>
            <h4>Riyadh, Saudi Arabia</h4>
            <p>Bachelor - Cambridge University 2023 - 2023</p>
            <a href='##'>#top_candidate</a>
                </span>
            </span>

          </Form>
        </Card.Body>
        
      </Card>
            </Col>
        </Row>
    </Container>
  )
}

export default Rightside