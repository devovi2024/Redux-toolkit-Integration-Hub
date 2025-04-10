const { createStore, combineReducers, applyMiddleware } = require('redux');
const { createLogger } = require('redux-logger');

const logger = createLogger();

const GET_PRODUCTS = 'GET_PRODUCTS';
const ADD_PRODUCTS = 'ADD_PRODUCTS';
const GET_CART_ITEMS = 'GET_CART_ITEMS';
const ADD_CART_ITEMS = 'ADD_CART_ITEMS';

const initialProductState = {
    products: ['sugar', 'salt'],
    numberOfProducts: 2
};

const initialCartState = {
    cart: ['sugar'],
    numberOfProducts: 1
};

const getProducts = () => ({ type: GET_PRODUCTS });
const addProducts = (product) => ({ type: ADD_PRODUCTS, payload: product });

const getCart = () => ({ type: GET_CART_ITEMS });
const addCart = (product) => ({ type: ADD_CART_ITEMS, payload: product });

const productReducer = (state = initialProductState, action) => {
    switch (action.type) {
        case GET_PRODUCTS:
            return { ...state };
        case ADD_PRODUCTS:
            return {
                products: [...state.products, action.payload],
                numberOfProducts: state.numberOfProducts + 1,
            };
        default:
            return state;
    }
};

const cartReducer = (state = initialCartState, action) => {
    switch (action.type) {
        case GET_CART_ITEMS:
            return { ...state };
        case ADD_CART_ITEMS:
            return {
                cart: [...state.cart, action.payload],
                numberOfProducts: state.numberOfProducts + 1,
            };
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    product: productReducer,
    cart: cartReducer
});

const store = createStore(rootReducer, applyMiddleware(logger));

store.dispatch(getProducts());
store.dispatch(addProducts("pen"));
store.dispatch(getCart());
store.dispatch(addCart("salt"));
