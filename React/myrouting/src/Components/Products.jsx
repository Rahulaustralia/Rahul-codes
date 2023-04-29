import React, { useEffect } from 'react';
import { useState } from 'react';
import './Products.css'; // import the CSS file

const Products = () => {
  
    const [data, setData] = useState([]);
  
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const jsonData = await response.json();
            setData(jsonData);
        };
        fetchData();
    }, []);

    return (
        <div>
            <h1>API DATA IN PRODUCT PAGE</h1>
            <div className="product-list">
                {data.map((item) => (
                    <div key={item.id} className="product">
                        <h2 className="product-title">Name:- {item.name}</h2>
                        <p className="product-email">Email-id:- {item.email}</p>
                        <p className="product-phone">Mobile No:- {item.phone}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Products;
