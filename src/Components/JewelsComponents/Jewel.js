import ChangeQuantity from "../Cart/ChangeQuantity";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../redux/cartSlice";


const Jewel = ({jewel}) => {

    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();

    return(
        <div className="bloc">
            <div className="twoImages">
                <div className="column" id="grayscale">
                    <img src={`${jewel.imgFull}.jpg`} className="imgFull" alt="The jewel" />
                </div>
                <div className="photo" id="zoomIn">
                    <img src={`${jewel.imgCloseup}.png`} className="imgCloseup" alt="Jewel closeup" />
                </div>
            </div>
            <div className="description">
                <h2 className="h2Jewel">{jewel.title}</h2>
                <h3 className="h3Jewel">${jewel.price}</h3>
                <ChangeQuantity quantity={quantity} setQuantity={setQuantity} />
                <button onClick={() => {dispatch(addItemToCart({jewel, quantity}));}} className="addToCartButton btn-16">Add to Cart</button>
            </div>
        </div>
    )
}

export default Jewel;