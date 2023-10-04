import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import '../Home/Home.css'
// import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import { useDispatch, useSelector } from 'react-redux'
import { AddAsyncProduct, UpdateAsyncproducts } from '../../Sevices/Action/Action'
import { useNavigate } from 'react-router'
import { Edit } from '@mui/icons-material'
// import ProductSlide from '../Productslide/ProductSlide';

function Editproduct() {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const editproduct = useSelector(state => state.ProductReducer.product[0])

    // console.log(editproduct);
    const [inputvalue, setinputvalue] = useState(editproduct)
    // console.log(inputvalue, "helo");

    const handlesubmit = (e) => {
        e.preventDefault();
        dispatch(UpdateAsyncproducts(inputvalue, inputvalue.id))
        console.log(inputvalue.id, "asjdhakhg");
        navigate('/view')
        setinputvalue({
            name: '',
            category: '',
            rate: '',
            price: '',
            qty: '',
            image: '',
            description: '',
        })

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
                <h1>Edit your details</h1>

                <form onSubmit={(e) => handlesubmit(e)}>
                    <div className="mb-3 col-5">
                        <label className="form-label">Add Product</label>
                        <input type="text" className="form-control" placeholder='Enter Product' name='name' value={inputvalue.name} onChange={handleChange} />
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
                        <label className="form-label">Qty</label>
                        <input type="number" className="form-control" placeholder='Enter Qty' value={inputvalue.qty} name='qty' onChange={handleChange} />
                    </div>
                    {/* <div className="mb-3 col-5">
                        <label className="form-label">Product Image</label>
                        <input type="text" className="form-control" value={inputvalue.image} onChange={handleChange} name='image' />
                    </div> */}
                    <div className="mb-3 col-5">
                        <label className="form-label">Description</label>
                        <input type="text" className="form-control" placeholder='Optional' value={inputvalue.description} name='description' onChange={handleChange} />
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
            {/* </Container> */}
        </>
    )
}

export default Editproduct