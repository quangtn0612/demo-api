import React, { Component } from 'react';
import ProductItem from '../../components/ProductItem/ProductItem';
import ProductList from '../../components/ProductList/ProductList';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import axios from 'axios';
import callApi from '../../utils/apiCaller';

class ProductListPage extends Component {
    constructor() {
        super();
        this.state = {
            products: []
        }
    }
    componentDidMount() {
        callApi('products','GET', null).then(res => {
            this.setState({
                products: res.data
            })
        })
    };

    onDelete = (id) => {
        const { products } = this.state;
        callApi(`products/${id}`,'DELETE',null).then(res => {
            if(res.status === 200){ //done
                var index = this.findIndex(products, id);
                if(index!== -1){
                    products.splice(index, 1);
                    this.setState({
                        products: products
                    })
                }
            }
    })};
    
    findIndex = (products, id) => {
        var result = -1;
        products.forEach((product,index) =>{
            if(product.id === id){
                result = index
            }
        })
        return result;
    }


    render() {
        // var { products } = this.props;
        const { products } = this.state;

        return <div className="container">
            <h1 className ="m-2">Product</h1>
            <Link className="btn btn-primary" to="/product/add">Add product</Link>
            <ProductList>
                {this.showProducts(products)}
            </ProductList>
        </div>

    }
    showProducts = (products) => {
        var result = null;
        if (products.length > 0) {
            result = products.map((product, index) => {
                return (
                    <ProductItem
                        key={index}
                        product={product}
                        index={index}
                        onDelete={this.onDelete}
                    />
                )
            })
        }
        return result;
    }
}

const mapStateToProps = state => {
    return {
        products: state.products
    }
}

export default connect(mapStateToProps, null)(ProductListPage);