import React, { useState, useEffect, Component } from 'react';
import callApi from '../../utils/apiCaller'
import { Link } from 'react-router-dom';

class ProductItem extends Component {
  render(){
    var { product } = this.props;
    return(
      <tr>
          <th scope="row">{product.id}</th>
          <td>{product.name}</td>
          <td>{product.price}</td>
          <td>
            <span className = {`badge badge-${product.status ? 'warning' : 'default'}`}>
              {product.status ? 'Available' : 'Sold out'}
            </span>
          </td>
          <td>
            <Link to={`/product/${product.id}/edit`} className="btn btn-primary">Edit</Link>
            <button className="btn btn-danger" onClick = {()=>this.onDelete(product.id)}>Delete</button>
          </td>
        </tr>
    )
  }
  onDelete(id){
    if(confirm('Are you sure to delete this item?')) //eslint-disable-line
    {
      this.props.onDelete(id);
    }
  }
  onEdit(id){

  }
}
export default ProductItem;