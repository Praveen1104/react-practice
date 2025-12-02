import React, { useEffect, useState } from 'react'
import "../components/Product.css";
function ProdutList() {
    const [products, setProducts] = useState([])
    const getProducts = async () => {
        try {

            const response = await fetch("https://dummyjson.com/products").then((data) => data.json())
            setProducts(response)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getProducts()
    }, [])
    return (
        <div>
            <h1>Page Based Code Splitting</h1>
            {
                products?.products?.map((product,i) => {
                    return (
                        <div className='pageCard' key={i}>
                            <p>{product.title}</p>
                            <img src={product.thumbnail} /></div>
                    )
                })
            }
        </div>
    )
}

export default ProdutList
