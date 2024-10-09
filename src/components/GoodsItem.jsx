function GoodsItem(props){
	// const {id, name, description, price, full_background, addToBasket = Function.prototype} = props;
	const {mainId, displayName, price, addToBasket = Function.prototype} = props;

	// console.log(offerTag.text);
	return (
	<div className="card" id={mainId}>
		<div className="card-image">
				{/* <img src={} alt={displayName} /> */}
		</div>
		   <span className="card-title">{displayName}</span>
		<div className="card-content">
			{/* <p>{offerTag['text']}</p> */}
		</div>
		<div className="card-action">
			<button className="btn" onClick={()=>addToBasket({mainId, displayName,price})}>купить</button>
			<span className="right" style={{fontSize: '1.8rem'}}>{price.finalPrice} руб.</span>
		</div>
	</div>
	)
}

export {GoodsItem}