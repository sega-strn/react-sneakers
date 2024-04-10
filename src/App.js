function App() {
	return (
		<div className='wrapper clear'>
			<header className='d-flex justify-between align-center'>
				<div className='d-flex align-center	'>
					<img className='headerLogo' src='/img/logo.png' alt='logo' />
					<div className='headerInfo'>
						<h3> React Sneakers</h3>
						<p className='opacity-5'>Магазин лучших кроссовок</p>
					</div>
				</div>

				<ul className='d-flex'>
					<li className='mr-30'>
						<img src='/img/cart.svg' alt='cart' />
						<span>1205 руб.</span>
					</li>
					<li className='mr-30'>
						<img src='/img/serdce.svg' alt='serdce' />
						<span>Закладки</span>
					</li>
					<li className='mr-30'>
						<img src='/img/users.svg' alt='users' />
						<span>Профиль</span>
					</li>
				</ul>
			</header>
			<section className='content p-40'>
				<h1 className='mb-40'>Все кроссовки</h1>

				<div className='d-flex'>
					<div className='card'>
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

					<div className='card'>
						<img
							width={133}
							height={112}
							src='/img/snickers/image 5.jpeg'
							alt='Nike Air Max 270'
							className='crd_Img'
						/>
						<h3>Мужские Кроссовки Nike Air Max 270</h3>
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

					<div className='card'>
						<img
							width={133}
							height={112}
							src='/img/snickers/image 6.jpeg'
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

					<div className='card'>
						<img
							width={133}
							height={112}
							src='/img/snickers/image 7.jpeg'
							alt='Nike Blazer Mid Suede'
							className='crd_Img'
						/>
						<h3>Кроссовки Puma X Aka Boku Future Rider</h3>
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
				</div>
			</section>
		</div>
	);
}

export default App;
