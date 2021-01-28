import React, { Component } from 'react';
import ProductItem from '../../components/ProductItem/ProductItem';
import ProductList from '../../components/ProductList/ProductList';
import { connect } from 'react-redux';
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
    }
    render() {
        // var { products } = this.props;
        const { products } = this.state;

        return <div className="container">
            <h1>Home</h1>
            <button className="btn btn-primary">Add product</button>
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