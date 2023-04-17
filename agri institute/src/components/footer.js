import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export default function Footer(props) {
  return (
    <MDBFooter  className=' footer text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between '>
        
        <div>
          <a href='/' className='me-4 text-reset'>
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href='/' className='me-4 text-reset'>
            <MDBIcon fab icon="twitter" />
          </a>
          <a href='/' className='me-4 text-reset'>
            <MDBIcon fab icon="google" />
          </a>
          <a href='/' className='me-4 text-reset'>
            <MDBIcon fab icon="instagram" />
          </a>
          <a href='/' className='me-4 text-reset'>
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href='/' className='me-4 text-reset'>
            <MDBIcon fab icon="github" />
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
                Institute 📖
              </h6>
              <p>
                Our institute is best for the bright future of the student
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
              <p>
                <a href='#!' className='text-reset'>
                  link
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  link
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  link 
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  link
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='/' className='text-reset'>
                  link
                </a>
              </p>
              <p>
                <a href='/' className='text-reset'>
                  link
                </a>
              </p>
              <p>
                <a href='/' className='text-reset'>
                  link
                </a>
              </p>
              <p>
                <a href='/' className='text-reset'>
                  link
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                Khargone
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                info@example.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> + xxxxxxxxxx
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> + xxxxxxxxxx
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
         Copyright@2023 Deepesh Yadav
        <a className='text-reset fw-bold' href='/home'>
      Agri Classes
        </a>
      </div>
    </MDBFooter>
  );
}