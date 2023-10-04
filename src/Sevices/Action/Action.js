import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, setDoc, updateDoc } from "firebase/firestore";
import { db } from "../../components/MyFirebase/Myfirebase";

export const AddCart =(data) => {
    console.log("doneeeeeeeeeeee", data);
    return {
        type : 'ADDCART',
        payload : data
    }
}
    // console.log(data);

    export const singleproduct = (data) =>{
        // console.log(data);
       return {
           type : 'SINGLE_PRODUCT',
           payload : data
       }
    }
    
    export const updateproduct = (data,index) =>{
    
    
       return {
           type : 'UPDATE_PRODUCT',
           payload : {data,index}
       }
    }
    
    export const Removedata = (id) => {
        // console.log(id,"hehjsdajsdg");
        return {
            type : 'DELETE_PRODUCT',
            payload : id
        }
    }
    
    export const Alldata = (data) => {
        // console.log(data, "alldata");
        return{ 
            type : 'ALL_DATA',
            payload : data
        }
    }

export const  AddAsyncProduct =(data) =>{
    
    return async dispatch =>{
        await addDoc(collection(db,"products"),data)
        dispatch(AddCart(data))
    }
}
export const  getproductAsync =() =>{
    return async dispatch =>{
        let AllGet = []
       let firedata =  await getDocs(collection(db, "products"));
    //    console.log(firedata, "firedataaaaaaaaaaaaa");
       firedata.forEach((doc) => {
        let all = {...doc.data(),id:doc.id};
        AllGet= [...AllGet,all]
    })
    // console.log(AllGet, "dohewefkhwvef");

       dispatch(Alldata(AllGet))
        
    }
}
export const  RemoveAsyncdata =(id) =>{
    // console.log(id,"rrrrrrrrrrrrrrrrrrrr");
    return async dispatch =>{
        await deleteDoc(doc(db, "products", `${id}`));

        dispatch(Removedata(id))
    }
}

export const  EditAsyncdata =(id) =>{
    // console.log(id,"rrrrrrrrrrrrrrrrrrrr");
    return async dispatch =>{
        let productdata = [];

        const predit =  await getDoc(doc(db, "products", `${id}`));
        const sproduct = {...predit.data(), id : id }

        productdata = [...productdata,sproduct]

        dispatch(singleproduct(productdata));
    }
}
export const  UpdateAsyncproducts =(data,id) =>{
    // console.log(id,"rrrrrrrrrrrrrrrrrrrr");
    return async dispatch =>{
    
        await updateDoc(doc(db, "products", `${id}`),data);

        dispatch(getproductAsync());
    }
}