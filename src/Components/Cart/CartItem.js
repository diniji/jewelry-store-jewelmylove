import dataJewels from "../../data/dataJewels";
import bin from "../../Images/icons8-trash-can-96.png";
import { useDispatch } from "react-redux";
import { removeItemFromCart } from "../../redux/cartSlice";


const CartItem = ({cartItem}) => {

    console.log(cartItem);

    const jewels = dataJewels.find(item => item.id === cartItem.jewelId);
    console.log(jewels);

    const dispatch = useDispatch();

    return(
        <div className="itemInCart">
            <img src={`${jewels.imgCloseup}.png`} className="cartImg" alt="Jewel closeup" />
            <div className="prodInfoInCart">
                <h2 className="h2Cart">Product Name: {jewels.title}</h2>
                <h3 className="h3Cart">Quantity: {cartItem.quantity}pc(s)</h3>
                <h3 className="h3Cart">Price: ${jewels.price * cartItem.quantity}</h3>
                <span onClick={() => dispatch(removeItemFromCart({cartItemId: cartItem.id}))}>
                    <img src={bin} className="binIcon" alt="garbage bin" />
                </span>
            </div>
        </div>
    )
}

export default CartItem;