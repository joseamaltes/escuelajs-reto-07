const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cart: [...state.cart, action.payload]
      }
      case 'DELETE_ITEM':
      return {
        ...state,
        cart:state.cart.filter((item, index) => index !== action.payload)
      }

    default:
      return state;
  }
}

export default reducer;