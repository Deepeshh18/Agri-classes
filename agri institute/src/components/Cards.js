import React from 'react'
import Card from 'react-bootstrap/Card'



const Cards = ({ data }) => {
    return (
        <>
            {
                data.map((element, k) => {
                    return (
                        <>
                            <Card style={{ width: '22rem', border: "none" }} className="hove mb-4">
                                <Card.Img variant="top" className='cd' src={element.imgdata} />

                                <div className="card_body">
                                    <div className="upper_data d-flex justify-content-between align-items-center">
                                        <h2 className='mt-4'>{element.rname}</h2>
                                       <p>{element.down}</p>
                                    </div>
                                </div>


                            </Card>
                        </>
                    )
                })
            }

        </>
    )
}

export default Cards