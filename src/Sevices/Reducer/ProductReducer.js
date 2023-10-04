// import { Incprice } from "../Action/Action";

const initiale = {
    products: [],
    product: null
}

const ProductReducer = (state = initiale, action) => {
    // console.log(action.payload.data);
    // console.log(state, "done");
    // console.log(action.payload);

    switch (action.type) {
        case 'ADDCART':
            return (
                {
                    ...state,
                    products: [...state.products, action.payload]
                }
            )
        case 'ALL_DATA':
            return (
                {
                    ...state,
                    products: action.payload
                }
            )
        case 'SINGLE_PRODUCT':
            return (
                {
                    ...state,
                    product: action.payload
                }
            )
        // }

        //     // default:
        //     //     return state


        //     // console.log(alldata);

        case 'DELETE_PRODUCT':

            let alldata = state.products

            //   console.log(alldata);

            let allprs = alldata.filter((del, id) => {
                return del.id != action.payload
            })


            return (
                {
                    ...state,
                    products: allprs

                }
            )



        default:
            return state
    }

}


export default ProductReducer