
import { Header } from '../../components/Header'
import { useEffect, useState } from 'react';
import { ProductsGrid } from './ProductsGrid';
import axios from 'axios'
import './HomePage.css';

export function HomePage({ cart }) {
    const [products, setProducts] = useState([]);


    useEffect(() => { // useEffect will help us run api call only once when homepage rerenders
        axios.get('/api/products')
            .then((response) => {
                setProducts(response.data)
            })


    }, []) //[] - dependency array, will only run once when the page rerenders


    return (
        <>
            <title>Ecommerce Project</title>

            <Header cart={cart} />

            <div className="home-page">
                <ProductsGrid products={products} />
            </div >
        </>
    );
}