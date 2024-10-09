import {useState, useEffect} from 'react';
import {API_KEY, API_URL} from '../config';


import { Preloader } from './Preloader';
import { GoodsList } from './GoodsLlist';
import {Cart} from './Cart';
import { BasketList } from './BasketList';
import {Alert} from './Alert';

function Shop(){
	const [goods, setGoods] = useState([]);
	const [loading, setLoading] = useState(true);
	const [order, setOrder] = useState([]);
	const [isBasketShow, setBasketShow] = useState(false);
	const [alertName, setAlertName] = useState('');

	const handleBasketShow = () =>{
		setBasketShow(!isBasketShow);
	}

	const addToBasket = (orderItem)=>{
		const itemIndex = order.findIndex(itemInOrder=>itemInOrder.mainId===orderItem.mainId);
		//alert(orderItem.name);
		if(itemIndex<0){
			const newItem = {
				...orderItem,
				quantity: 1,
			}

			setOrder([...order, newItem]);
		}else{
			const updatedOrder = order.map((item, index)=>{
				// if(item.id===orderItem.id){
				if(index===itemIndex){
					return {
						...item,
						quantity: item.quantity+1,
					}
				}else{
					return item;
				}
			});
			setOrder(updatedOrder);
		}
		setAlertName(orderItem.displayName);
	}

	const removeFromBasket = (itemId)=>{
		const newOrder = order.filter(el => el.mainId!==itemId);
		setOrder(newOrder);
	}

	const incQuantity = (itemId) =>{
	//	alert(itemId);
		const updatedOrder = order.map((item, index)=>{
			console.log(itemId, item.mainId);
			if(item.mainId===itemId){
				return {
					...item,
					quantity: item.quantity+1
				}
			}else{
				return item;
			}
		});
		setOrder(updatedOrder);
	}

	const decQuantity = (itemId) =>{
		
		const updatedOrder = order.map((item, index)=>{

			if(item.mainId===itemId){
				if(item.quantity>1){
					return {
						...item,
						quantity: item.quantity-1,
					}
				}else{
						return item;
					
				}
			}else{
				return item;
			}	
		});

		setOrder(updatedOrder);
	}

	const closeAlert = ()=>{
		setAlertName('');
	}

	// alert(API_KEY)
	useEffect(function getGoods(){
		fetch(API_URL, {
			headers: {
				'Authorization': API_KEY,
			},
		}).then(response=>response.json()).then(data=>{
			console.log(data.shop.slice(0, 11));
			data.shop && setGoods(data.shop.slice(0, 11));
			setLoading(false);
		});
	}, []);

	return <main className='container content'>
		<Cart quantity={order.length} handleBasketShow={handleBasketShow}/>
		{
			loading ? <Preloader/> : <GoodsList goods = {goods} addToBasket={addToBasket}/>
		}
		{
			isBasketShow && <BasketList order={order} handleBasketShow={handleBasketShow} removeFromBasket={removeFromBasket} incQuantity={incQuantity} decQuantity={decQuantity}/>
		}
		{
			alertName && <Alert name={alertName} closeAlert={closeAlert}/>
		}
	</main>
}

export {Shop};