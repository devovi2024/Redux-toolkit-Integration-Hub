// productReducer 


const GET_PRODUCTS = 'GET_PRODUCTS'
const ADD_PRODUCTS = "ADD_PRODUCTS"


const initialProductState = {
    products : ['sugar', 'salt'],
    numberOfProducts: 2
}

const getProducts = () => {
    return {
        type : GET_PRODUCTS
    }
}
const addProducts = (product) => {
    return {
        type : ADD_PRODUCTS,
        payload: product
    }
}


// product Reducer 
const productReducer = (state=initialProductState, action)
switch (action.type) {
    case GET_PRODUCTS:
        
        return {
            products: [...state.products, action.payload],
            numberOfProducts: state.numberOfProducts + 1,
        }

    default:
        state;
}

// store 
const store = createStore(productReducer);
store.subscribe(() => {
    console.log(store.getState());

})

store.dispatch(getProducts());
store.dispatch(addProducts("pen"));


