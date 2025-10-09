import React from 'react';

const ProductTable = ({products}) => {
    return (
        <div>
            <table>
              <thead>
                <th>No</th>
                <th>Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Actions</th>
              </thead>
             {
             products.map((product, index) => (
                  <tr key={index}>
                  <td>{index+1}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.quantity}</td>
                <td></td>
                </tr>
                   ))
                }

            </table>
        </div>
    );
};

export default ProductTable;