function BasketItem(props){
	const {mainId, displayName, price = 0, quantity, removeFromBasket=Function.prototype, incQuantity = Function.prototype, decQuantity=Function.prototype} = props;

	return 	<li className="collection-item">
				{displayName} <span className="collection-change-quantity" onClick={()=>decQuantity(mainId)}>-</span> {quantity} <span className="collection-change-quantity" onClick={()=>incQuantity(mainId)}>+</span> = {price.finalPrice * quantity}
				<span className='secondary-content'><i className="material-icons basket-delete" onClick={()=>removeFromBasket(mainId)}>close</i></span>
			</li>
}	

export {BasketItem};