function Card(props) {
	return (
		<div className='card'>
			<div className='favorite'>
				<img src='/img/heart-unlinked.svg' alt='unlinked' />
			</div>
			<img
				width={133}
				height={112}
				src={props.imageUrl}
				alt='Nike Blazer Mid Suede'
				className='crd_Img'
			/>
			<h3>{props.title}</h3>
			<div className='d-flex justify-between align-center'>
				<div className='d-flex flex-column'>
					<span>Цена:</span>
					<b>{props.price} руб.</b>
				</div>
				<button className='button'>
					<img width={11} height={11} src='/img/plus.svg' alt='plus' />
				</button>
			</div>
		</div>
	);
}

export default Card;
