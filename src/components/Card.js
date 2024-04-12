function Card() {
	return (
		<div className='card'>
			<div className='favorite'>
				<img src='/img/heart-unlinked.svg' alt='unlinked' />
			</div>
			<img
				width={133}
				height={112}
				src='/img/snickers/crosi1.jpeg'
				alt='Nike Blazer Mid Suede'
				className='crd_Img'
			/>
			<h3>Мужские Кроссовки Nike Blazer Mid Suede</h3>
			<div className='d-flex justify-between align-center'>
				<div className='d-flex flex-column'>
					<span>Цена:</span>
					<b>12 999 руб.</b>
				</div>
				<button className='button'>
					<img width={11} height={11} src='/img/plus.svg' alt='plus' />
				</button>
			</div>
		</div>
	);
}

export default Card;
