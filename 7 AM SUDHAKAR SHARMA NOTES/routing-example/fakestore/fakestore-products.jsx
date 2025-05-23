import axios from "axios";
import { useEffect, useState } from "react";
import { Link, Outlet, useNavigate, useParams } from "react-router-dom";



export function FakestoreProducts(){


    const [products, setProducts] = useState([{id:0, title:'', category:'', price:0, image:'', rating:{rate:0, count:0}, description:''}]);

    let params = useParams();
    let navigate = useNavigate();

    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products/category/${params.category}`)
        .then(response=>{
             setProducts(response.data);
        })
    },[])

    function handleBackClick(){
        navigate('/');
    }

    return(
        <div>
            <h3>Fakestore Products</h3>
            <div className="row">
                <div className="col-3">
                        <div className="d-flex flex-wrap" style={{height:'300px'}}>
                        {
                            products.map(product=>
                                <div key={product.id} className="card m-2 p-2" style={{width:'120px'}}>
                                    <div className="card-header">
                                        <Link to={`details/${product.id}`}>
                                        <img height="50" src={product.image} className="card-img-top" />
                                        </Link>
                                    </div>
                                    
                                </div>
                            )
                        }
                        <button onClick={handleBackClick} className="btn btn-primary w-100">Back to Categories</button>
                    </div>
                    
                </div>
                <div className="col-9">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}