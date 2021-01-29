import React, { Component } from 'react';
import callApi from '../utils/apiCaller';
import { Link } from 'react-router-dom';

class ProductActionPage extends Component {
    constructor() {
        super();
        this.state = {
            id: '',
            name: '',
            price: '',
            status: '',
        }
    }

    componentDidMount() {
        const { match } = this.props;
        if(match){
            const id = match.params.id; //get product id
            const { name, price, status } = this.state;
            callApi(`products/${id}`, 'GET', null).then((res) => {
                this.setState({
                    id: res.data.id,
                    name: res.data.name,
                    price: res.data.price,
                    status: res.data.status
                })
            }).catch((err) => {
                console.log(err);
            })
        }
        
    }

    onChange = (e) => {
        let target = e.target;
        let name = target.name;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]: value
        })
    }
    onSave = (e) => {
        e.preventDefault();
        const { id, name, price, status } = this.state;
        const { history, match } = this.props;

        if (id) {
            callApi(`products/${id}`, 'PUT', { //update
                name: name,
                price: price,
                status: status
            }).then((res) => {
                history.push("/product");
            }).catch((err) => {
                console.log(err);
            })
        }
        else {
            callApi('products', 'POST', { //add
                name: name,
                price: price,
                status: status
            }).then((res) => {
                history.goBack();
                // history.push("/");
            }).catch((err) => {
                console.log(err);
            })
        }

    }
    render() {

        var { name, price, status } = this.state;
        return <div className="container">
            <form onSubmit={this.onSave}>
                <div className="form-group">
                    <label for="name">Product Name</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        className="form-control"
                        value={name}
                        onChange={this.onChange}
                    />
                </div>
                <div className="form-group">
                    <label for="price">Price</label>
                    <input
                        type="text"
                        name="price"
                        id="price"
                        className="form-control"
                        value={price}
                        onChange={this.onChange}
                    />
                </div>
                <div className="form-check">
                    <input
                        type="checkbox"
                        className="form-check-input"
                        id="status"
                        name="status"
                        value={status}
                        onChange={this.onChange}
                        checked={status}
                    />
                    <label className="form-check-label" htmlFor="status">Available</label>
                </div>
                <Link to="/product" className="btn btn-danger">
                    Come back!
                </Link>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    }
}
export default ProductActionPage;