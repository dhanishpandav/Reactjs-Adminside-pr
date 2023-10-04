import React, { useEffect, useState } from 'react'
import { Container, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { EditAsyncdata, RemoveAsyncdata, getproductAsync } from '../../Sevices/Action/Action';
import { useNavigate } from 'react-router';

function View() {
    const Allfirestoredata = useSelector(state => state.ProductReducer.products)

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [count, setcount] = useState(1)

    
    const Alldata = () => {
        dispatch(getproductAsync())
    }
    const handledelete = (id) => {
        dispatch(RemoveAsyncdata(id))
    }
    const handleEdit = (id) => {
        dispatch(EditAsyncdata(id))
        navigate(`/Edit/:${id}`)
    }
    useEffect(() => {
        Alldata()
    })

    return (
        <Container>
            <Table striped bordered hover className='mt-4'>
                <thead>

                    <tr>
                        <th>Image</th>
                        <th>TITLE</th>
                        <th>CATEGORY</th>
                        <th>PRICE</th>
                        <th>QTY</th>
                        <th>TOTAL</th>
                        <th>ACTION</th>
                        {/* <th>BUY NOW</th> */}
                    </tr>
                </thead>
                <tbody>
                    {
                        Allfirestoredata.map((val) => {
                            //  totalprice = val.qty * val.price

                            return (
                                <tr>
                                    <td>
                                        <div style={{width : "100px" , height : "100px"}}>
                                        <img src={val.image} alt="" style={{width : "100%", height: "100%", objectFit: "contain"}}/>
                                        </div>
                                    </td>
                                    <td>{val.name}</td>
                                    <td>{val.category}</td>
                                    <td> ₹ {val.price}</td>
                                    <td>{val.qty}</td>
                                    <td>₹ {val.price}</td>
                                    <td><button className='btn btn-primary' onClick={() =>handleEdit(val.id)}>Edit</button>
                                        <button className='btn btn-danger ms-2' onClick={() => handledelete(val.id)}>Delete</button></td>


                                </tr>
                            )
                        })
                    }
                </tbody>


            </Table>


        </Container>

    )
}

export default View