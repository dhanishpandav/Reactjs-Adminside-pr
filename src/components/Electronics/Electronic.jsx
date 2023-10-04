import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { parsedata } from '../Add Product/product'
import '../Electronics/Electronic.css'
import { Container } from 'react-bootstrap'
import { AddCart } from '../../Sevices/Action/Action'
import { useNavigate } from 'react-router'

function Electronic() {

  const [Allsmartphones, setphones] = useState([])

  // console.log(Allsmartphones);
  const dispatch = useDispatch()
  const navigate = useNavigate()


    const handlecart = (id,data) =>{
        // console.log(id,data);
        dispatch(AddCart(id,data));
        navigate('/view');
        
        
    }


  // console.log(Alldata);

  return (
    <Container>

     <></>
  </Container>
  )
}

export default Electronic