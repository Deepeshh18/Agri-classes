import "./style.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import Image from "react-bootstrap/Image";




export default function Navbar2(props){



    const popover = (
        <Popover id="popover-basic" className='popupContent' >
          <Image src="sir.jpg" className='popup p-3'/>
          <h5 className='name'>Mr: Ravindra Choudhary</h5>
          <p className='name'><b>Education: Bachelor's Degree in B.sc(Agriculture Science) </b>RVSKVV, Indore 2012-2015</p>
          <p className='name'><b>Profession:</b> Teacher</p>
          <p className='name'><b>Experience:</b>  8 in teaching</p>
          <p className='name'><b>Phone:</b> xxxxxxxxxx</p>
          <a className='name'  href="">Email</a>
          <a className='name'  href="">Profile</a>
   </Popover>
     
      );
  
      const popover2 = (
        <Popover id="popover-basic" className='popupContent2' >
          <div className='name2'>
          <p><h5>About-us: </h5>This is one of the best coaching classes in khargone.we are providing all subject classes of 9th to 12th class'students</p>
          <p><h5>Address: </h5>Khargone, Madhya Pradesh,India</p>
          <p><h5>Phone: </h5>+91 xxxxxxxxxx</p>
          </div>
          
   </Popover>
      );
return (
    <>
 <Navbar expand="lg">
  <Container>
    <Navbar.Brand href="#home">Agri classes</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="/#home">Home</Nav.Link>


        <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
        <Nav.Link href="#link">Contact</Nav.Link>
        </OverlayTrigger>
        <OverlayTrigger trigger="click" placement="bottom" overlay={popover2}>
        <Nav.Link href="#link">About-us</Nav.Link>
        </OverlayTrigger>
        <Nav.Link href="./feedback/views/feedback_form">Feedback</Nav.Link>       
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
</>
)}