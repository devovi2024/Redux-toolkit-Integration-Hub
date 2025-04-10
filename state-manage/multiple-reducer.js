// Import Redux functions
const { createStore, combineReducers } = require('redux');

// =======================
// Action Type Constants
// =======================

// Product action types
const GET_PRODUCTS = 'GET_PRODUCTS';
const ADD_PRODUCTS = 'ADD_PRODUCTS';

// Cart action types
const GET_CART_ITEMS = 'GET_CART_ITEMS';
const ADD_CART_ITEMS = 'ADD_CART_ITEMS';

// =======================
// Initial States
// =======================

// Initial state for the product section
const initialProductState = {
    products: ['sugar', 'salt'],
    numberOfProducts: 2
};

// Initial state for the cart section
const initialCartState = {
    cart: ['sugar'],
    numberOfProducts: 1
};

// =======================
// Action Creators
// =======================

// Returns an action to get products (used for reading state)
const getProducts = () => {
    return {
        type: GET_PRODUCTS
    };
};

// Returns an action to add a product with payload
const addProducts = (product) => {
    return {
        type: ADD_PRODUCTS,
        payload: product
    };
};

// Returns an action to get cart items (used for reading state)
const getCart = () => {
    return {
        type: GET_CART_ITEMS
    };
};

// Returns an action to add a product to the cart
const addCart = (product) => {
    return {
        type: ADD_CART_ITEMS,
        payload: product
    };
};

// =======================
// Reducers
// =======================

// Handles product-related actions and updates product state
const productReducer = (state = initialProductState, action) => {
    switch (action.type) {
        case GET_PRODUCTS:
            // Just return current state without changes
            return {
                ...state,
            };
        case ADD_PRODUCTS:
            // Add new product and increase count
            return {
                products: [...state.products, action.payload],
                numberOfProducts: state.numberOfProducts + 1,
            };
        default:
            // Return unchanged state for unknown actions
            return state; 
    }
};

// Handles cart-related actions and updates cart state
const cartReducer = (state = initialCartState, action) => {
    switch (action.type) {
        case GET_CART_ITEMS:
            // Just return current state without changes
            return {
                ...state,
            };
        case ADD_CART_ITEMS:
            // Add item to cart and increase count
            return {
                cart: [...state.cart, action.payload],
                numberOfProducts: state.numberOfProducts + 1,
            };
        default:
            // Return unchanged state for unknown actions
            return state; 
    }
};

// =======================
// Combine Reducers
// =======================

// Combines product and cart reducers into a single root reducer
const rootReducer = combineReducers({
    product: productReducer,
    cart: cartReducer
});

// =======================
// Redux Store
// =======================

// Creates the Redux store with the root reducer
const store = createStore(rootReducer);

// Subscribes to the store and logs the state whenever it changes
store.subscribe(() => {
    console.log(store.getState());
});

// =======================
// Dispatching Actions
// =======================

// Dispatch actions to update the store
store.dispatch(getProducts());
store.dispatch(addProducts("pen"));
store.dispatch(getCart());
store.dispatch(addCart("salt"));