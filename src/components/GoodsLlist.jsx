import {GoodsItem} from './GoodsItem';


function GoodsList(props){
	const {goods = [], addToBasket = Function.prototype} = props;

	if(!goods.length){
		return <h3>Nothing to show</h3>
	}

	return <div className="goods">
		{goods.map(item=>{
			return <GoodsItem key={item.mainId} {...item} addToBasket={addToBasket}  /> 
		})}
	</div>
}

export {GoodsList}