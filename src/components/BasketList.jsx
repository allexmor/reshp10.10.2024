import { BasketItem } from './BasketItem';

function BasketList(props){
	const {order = [], handleBasketShow=Function.prototype, removeFromBasket = Function.prototype, incQuantity = Function.prototype, decQuantity=Function.prototype} = props;

	const totalPrice = order.reduce((sum, el)=>{
		return sum+el.price.finalPrice * el.quantity;
	}, 0);

	return (
		<ul className="collection basket-list">
			<li className="collection-item active">Корзина 
				<span className='secondary-content'>
					<i className="material-icons basket-close" onClick={handleBasketShow}>close</i>
				</span>
			</li>
			{
				order.length ? order.map(item=>(
					<BasketItem key={item.mainId} {...item} removeFromBasket={removeFromBasket} incQuantity={incQuantity} decQuantity={decQuantity}/>
				)) : <div className="collection-item">Корзина пуста</div>
			}
			<li className="collection-item active">Общая стоимость {totalPrice} руб.
			</li> 
			<li className="collection-item active">
				<button className="btn btn-small">Оформить</button>
			</li> 
		</ul>
		);
}

export {BasketList};