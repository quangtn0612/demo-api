import React, { useState, useEffect, Component } from 'react';
import axios from 'axios';

class ProductItem extends Component {
  render(){
    var { product } = this.props;
    return(
      <tr>
          <th scope="row">{product.id}</th>
          <td>{product.code}</td>
          <td>{product.name}</td>
          <td>{product.desc}</td>
          <td>{product.price}</td>
          <td>
            <span className = {`badge badge-${product.status ? 'warning' : 'default'}`}>
              {product.status ? 'Available' : 'Sold out'}
            </span>
          </td>
          <td>
            <button className="btn btn-primary">Edit</button>
            <button className="btn btn-danger">Delete</button>
          </td>
        </tr>
  
      /* {product.map((item) => (
        <tr>
          <th scope="row">{item.id}</th>
          <td>{item.code}</td>
          <td>{item.name}</td>
          <td>{item.desc}</td>
          <td>{item.price}</td>
          <td>
            <span className = {`badge badge-${item.status ? 'warning' : 'default'}`}>
              {item.status ? 'Available' : 'Sold out'}
            </span>
          </td>
          <td>
            <button className="btn btn-primary">Edit</button>
            <button className="btn btn-danger">Delete</button>
          </td>
        </tr>)
      )} */
    )
  }

  // const [products, setProducts] = useState([])
  // useEffect(() => {
  //   console.log('effect');
  //   axios
  //     .get('http://localhost:3001/products')
  //     .then((res, req) => {
  //       console.log('promise fulfilled');
  //       setProducts(res.data)
  //     })
  // }, [])
  
}
export default ProductItem;