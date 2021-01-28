import { combineReducers } from 'redux';
import ProductListPage from '../pages/ProductListPage/ProductListPage';
import products from './products'

const appReducers = combineReducers({
    products

})
export default appReducers;