import { useReducer, createContext, useState, useEffect} from 'react';

const cartContext = createContext();

const initialState = { cart: [] };

const reducer = (state, action) => {
    switch (action.type) {
        case 'addToCart': {
            const inCart = state.cart.some((curr) => curr.name === action.payload.name);
            if (inCart) {
                return state;
            } else {
                return {
                    ...state,
                    cart: [...state.cart, { name: action.payload.name, price: action.payload.price, quantity: 1}]
                };
            }
        }
        case 'incrementQuantity': {
            const updatedCart = state.cart.map((item) =>
                item.name === action.payload.name ? { ...item, quantity: item.quantity + 1 } : item
            );
            return { ...state, cart: updatedCart };
        }
        case 'decrementQuantity': {
            const updatedCart = state.cart.map((item) =>
                item.name === action.payload.name ? { ...item, quantity: item.quantity - 1 } : item
            ).filter(item => item.quantity > 0); 
            // Remove items with zero quantity
            return { ...state, cart: updatedCart };
        }
        case 'deleteCartItem' : {
            const updatedCart = state.cart.filter((item) => {
                return item.name !== action.payload.name;
            })
            return{...state, cart: updatedCart};
        }
        case 'clearCart' : {
            return {
                ...state,
                cart:[]
            };
        }
        default: {
          throw new Error('Action not defined!!!');
        }
    }
};

const CartProvider = ({ children }) => {
    const[cartQuantity, setCartQuantity] = useState(0); 
    const[cartTotal, setCartTotal] = useState(0);

    const [state, dispatch] = useReducer(reducer, initialState);
    const[confirmOrder, setConfirmOrder] = useState(false);
    
    const[checkingOut, setCheckingOut] = useState(false);

    const calculateCartQuantity =  () => {
        let cartQuantity = 0;
    state.cart.forEach((item) => {
        cartQuantity += item.quantity;
    })
    setCartQuantity(cartQuantity);
    return;
  }
    
    const calculateCartTotal =  () => {
        let cartTotal = 0;
    state.cart.forEach((item) => {
        cartTotal += item.price * item.quantity;
    })
    setCartTotal(cartTotal);
    return;
  }

    useEffect(() => {
        calculateCartQuantity();
        calculateCartTotal();
    },[state.cart]);
   
    const confirmOrderHandler = () => {
        setConfirmOrder(!confirmOrder);
    };  

    const checkingOutHandler = (checkout) => {
        setCheckingOut(checkout);
    }
    return (
        <cartContext.Provider value={{ state, dispatch, confirmOrder,cartQuantity, cartTotal, confirmOrderHandler, checkingOut, checkingOutHandler}}>
            {children}
        </cartContext.Provider>
    );
};

export { cartContext, CartProvider };
