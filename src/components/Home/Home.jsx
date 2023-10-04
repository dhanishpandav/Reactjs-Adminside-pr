import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import '../Home/Home.css'
// import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import { useDispatch } from 'react-redux'
import { AddAsyncProduct } from '../../Sevices/Action/Action'
import { useNavigate } from 'react-router'
// import ProductSlide from '../Productslide/ProductSlide';

function Home() {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [inputvalue, setinputvalue] = useState({
    name: '',
    brand : '',
    category: '',
    rate: '',
    price: '',
    country: '',
    stock: '',
    qty: '',
    image: '',
    description: '',
  })
  // console.log(inputvalue);

  const handlesubmit = (e) => {
    e.preventDefault();
    dispatch(AddAsyncProduct(inputvalue))
    setinputvalue({
      name: '',
      brand:'',
      category: '',
      rate: '',
      price: '',
      country: '',
      stock: '',
      qty: '',
      image: '',
      description: '',
    })
    navigate('/view')

  }

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setinputvalue({ ...inputvalue, [name]: value })
  }

  return (

    <>
      {/* <Container> */}

      <div className="container-1 all mt-5">

        <form onSubmit={(e) => handlesubmit(e)}>
          <div className="mb-3 col-5">
            <label className="form-label">Product Name</label>
            <input type="text" className="form-control" placeholder='Enter Product Name' name='name' value={inputvalue.name} onChange={handleChange} />
          </div>
          <div className="mb-3 col-5">
            <label className="form-label">Brand</label>
            <input type="text" className="form-control" placeholder='Enter Product Brand' value={inputvalue.brand} name='brand' onChange={handleChange} />
          </div>
          <div className="mb-3 col-5">
            <label className="form-label">Category</label>
            <input type="text" className="form-control" placeholder='Enter Product Category' value={inputvalue.category} name='category' onChange={handleChange} />
          </div>
          <div className="mb-3 col-5">
            <label className="form-label">Rating</label>
            <input type="number" className="form-control" placeholder='Give Rate' value={inputvalue.rate} name='rate' onChange={handleChange} />
          </div>
          <div className="mb-3 col-5">
            <label className="form-label">Price</label>
            <input type="number" className="form-control" placeholder='Enter Price' value={inputvalue.price} name='price' onChange={handleChange} />
          </div>
          <div className="mb-3 col-5">
            <label className="form-label">Country Origin</label>
            <input type="text" className="form-control" placeholder='Enter Country' value={inputvalue.country} name='country' onChange={handleChange} />
          </div>
          <div className="mb-3 col-5">
            <label className="form-label">Qty</label>
            <input type="number" className="form-control" placeholder='Enter Qty' value={inputvalue.qty} name='qty' onChange={handleChange} />
          </div>
          <div className="mb-3 col-5">
            <label className="form-label">Stock Available</label>
            <input type="number" className="form-control" placeholder='Enter stock' value={inputvalue.stock} name='stock' onChange={handleChange} />
          </div>
          <div className="mb-3 col-5">
            <label className="form-label">Description</label>
            <input type="text" className="form-control" placeholder='Optional' value={inputvalue.description} name='description' onChange={handleChange} />
          </div> 
          <div className="mb-3 col-5">
            <label className="form-label">Product Image</label>
            <input type="text" className="form-control" placeholder='image link' value={inputvalue.image} onChange={handleChange} name='image' />
          </div>

          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
      {/* </Container> */}
    </>
  )
}

export default Home