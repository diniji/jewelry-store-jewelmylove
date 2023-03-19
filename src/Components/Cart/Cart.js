import { useSelector } from "react-redux";
import { getCartItems, getTotalPrice } from "../../redux/cartSlice";
import CartItem from "./CartItem";


const Cart = () => {
    const cartItems = useSelector(getCartItems);
    const totalPrice = useSelector(getTotalPrice);

    return(
        <div>

            <h2 className="cartH2">TOTAL: ${totalPrice}</h2>

            {cartItems.map(cartItem =>
            <CartItem cartItem={cartItem}/>)}

        </div>
    )
}

export default Cart;