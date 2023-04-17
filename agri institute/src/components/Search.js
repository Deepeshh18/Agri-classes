import React, { useEffect, useState } from 'react'
import Fooddata from './CourseData'
import "./style.css"
import Form from 'react-bootstrap/Form'
import Cards from './Cards'
import Set from './Set'

const Search = () => {

    const [fdata] = useState(Fooddata);

    // console.log(fdata);

    const [copydata, setCopyData] = useState([]);



    // console.log(copydata);


    const chanegData = (e) => {
        let getchangedata = e.toLowerCase();

        if (getchangedata === "") {
            setCopyData(fdata);
        } else {
            let storedata = copydata.filter((ele, k) => {
                return ele.rname.toLowerCase().match(getchangedata);
                
            });

            setCopyData(storedata)
        
        }


        
    }
    




    useEffect(() => {

        setTimeout(() => {
            setCopyData(Fooddata);
        }, 3000);

    }, [])


    
        


    

    return (
        <>
     

            

            <Form className='d-flex justify-content-center align-items-center mt-3'>
                <Form.Group className=" mx-2 col-lg-4" controlId="formBasicEmail">

                    <Form.Control type="text"
                        onChange={(e) => chanegData(e.target.value)}
                        placeholder="Search here..." />
                </Form.Group>
                <button className='btn text-light col-lg-1' style={{ background: "Darkblue"}} >Submit</button>
            </Form>


            <section className='iteam_section mt-4 container'>
               <center><h2 className='px-4 mt-5 mb-5' style={{ fontWeight: 400 }}>Syllabus</h2></center>

                <div className="row mt-2 d-flex justify-content-around align-items-center">
                    {copydata && copydata.length ? <Cards data={copydata} /> : <Set sdata={fdata} />}
                </div>
                
            </section>

        </>
    )
}

export default Search