import React from 'react';

const ProductActionPage = () => {
    return <div className="container">
        <form>
            <div className="form-group">
                <label for="code">Product Code</label>
                <input type="text" name="code" id="code" className="form-control" />
            </div>
            <div className="form-group">
                <label for="name">Product Name</label>
                <input type="text" name="name" id="name" className="form-control" />
            </div>
            <div className="form-group">
                <label for="desc">Description</label>
                <input type="text" name="desc" id="desc" className="form-control" />
            </div>
            <div className="form-group">
                <label for="price">Price</label>
                <input type="text" name="price" id="price" className="form-control" />
            </div>
            <div className="form-group">
                <label for="status">Status</label>
                <input type="checkbox" className="form-check-input" id="status" />
            </div>
            <div className="form-group">

            </div>
            <div className="form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                <label className="form-check-label" htmlFor="exampleCheck1">Available</label>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </div>
}
export default ProductActionPage;