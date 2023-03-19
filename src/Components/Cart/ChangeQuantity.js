const ChangeQuantity = ({quantity, setQuantity}) => {

    const addItem = () => {
        const newQuantity = quantity + 1;
        setQuantity(newQuantity);
    }

    const removeItem = () => {
        if (quantity <=1) return;
        const newQuantity = quantity - 1;
        setQuantity(newQuantity);
    }

    return(
        <div className="plusMinus">
            <button onClick={addItem} className="addRemoveButton">+</button>
            <span>{quantity}</span>
            <button onClick={removeItem} className="addRemoveButton">-</button>
        </div>
    )
}

export default ChangeQuantity;