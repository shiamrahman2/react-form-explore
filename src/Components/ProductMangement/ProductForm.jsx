import React, { useState } from 'react';
import './input.css';
const ProductForm = ({handleProducts}) => {
    const [error,setError]=useState('');
    const handleOnSubmit=(e)=>{
        e.preventDefault();
        const name=e.target.name.value;
        const price=e.target.price.value;
        const quantity=e.target.quantity.value;
        //console.log(name,price,quantity);
        if(name.length===0){
            setError('Name Should Import');
            return;
        }else if(price.name===0){
            setError('price should include');
            return ;
        }else if(price<0){
            setError('price should be valid');
            return;
        }else if(quantity<0){
            setError('quantity greater than 1');
            return;
        }else{
            setError('');
        }
        const newProduct={
            name,
            price,
            quantity
        }
       handleProducts(newProduct);
    }
    return (
        <div>
            <form onSubmit={handleOnSubmit}>
                <input className='input-value' type="text" name="name"  placeholder='Product name' />
                <br />
                <input className='input-value' type="text" name="price" placeholder='Price' />
                <br />
                 <input className='input-value' type="text" name="quantity" placeholder='Quantity' />
                 <br />
                 <input className='input-value' type="submit" value="Submit" />
                 <p><small>{error}</small></p>
            </form>
        </div>
    );
};

export default ProductForm;