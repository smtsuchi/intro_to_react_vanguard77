import React, { useState, useEffect } from 'react'



export default function ShopStripe() {
    const STRIPE_SECRET_KEY = process.env.REACT_APP_STRIPE_SECRET_KEY

    const [products, setProducts] = useState([])

    const getProducts = async () => {
        const res = await fetch("https://api.stripe.com/v1/products", {
            method: "GET",
            headers: {
                Authorization: `Bearer ${STRIPE_SECRET_KEY}`
            }
        })
        const data = await res.json()
        return data
    }

    useEffect(async ()=>{
        console.log(STRIPE_SECRET_KEY)
        const data = await getProducts()
        setProducts(data.data)
    }, [])


    const loopThroughProducts = (arr) => {
        console.log(arr)
        return arr.map(p => (
        <div key={p.id}>
            <h1>{p.name}</h1>
            <p>{p.description}</p>
        </div>))
    }

    const goToStripe = () => {
        fetch("http://localhost:5000/stripe/createCheckoutSession", {
            method: "POST",
            body: JSON.stringify({
                cart: []
            })
        })
    }

    return (
        <div id='check'>
            {loopThroughProducts(products)}
            <form action='http://localhost:5000/stripe/createCheckoutSession' method='POST'>
                <button type='submit' className='btn btn-primary'>Subscribe pls</button>
            </form>
        </div>
    )
}
