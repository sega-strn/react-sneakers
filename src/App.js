function App() {
	return (
		<div className='wrapper clear'>
			<div className='overlay'>
				<div className='drawer'>
					<h2 className='d-flex justify-between mb-30'>
						Корзина
						<img
							className='removeBtn cu-p'
							src='/img/btn-remove.svg'
							alt='remove'
						/>
					</h2>
					<div className='items'>
						<div className='cartItem d-flex align-center mb-20'>
							<div
								style={{ backgroundImage: "url(/img/snickers/crosi1.jpeg)" }}
								className='cartItemImg'
							></div>
							<div className='mr-20 flex'>
								<p className='mb-5'>Мужские Кроссовки Nike Air Max 270</p>
								<b>12 999 руб.</b>
							</div>
							<img
								className='removeBtn'
								src='/img/btn-remove.svg'
								alt='remove'
							/>
						</div>

						<div className='cartItem d-flex align-center'>
							<div
								style={{ backgroundImage: "url(/img/snickers/crosi1.jpeg)" }}
								className='cartItemImg'
							></div>
							<div className='mr-20 flex'>
								<p className='mb-5'>Мужские Кроссовки Nike Air Max 270</p>
								<b>12 999 руб.</b>
							</div>
							<img
								className='removeBtn'
								src='/img/btn-remove.svg'
								alt='remove'
							/>
						</div>

						<div className='cartItem d-flex align-center'>
							<div
								style={{ backgroundImage: "url(/img/snickers/crosi1.jpeg)" }}
								className='cartItemImg'
							></div>
							<div className='mr-20 flex'>
								<p className='mb-5'>Мужские Кроссовки Nike Air Max 270</p>
								<b>12 999 руб.</b>
							</div>
							<img
								className='removeBtn'
								src='/img/btn-remove.svg'
								alt='remove'
							/>
						</div>
					</div>

					<div className='cartTotalBlock'>
						<ul>
							<li>
								<span>Итого:</span>
								<div></div>
								<b>21 498 руб. </b>
							</li>
							<li>
								<span>Налог 5%: </span>
								<div></div>
								<b>1074 руб. </b>
							</li>
						</ul>
						<button className='greenButton'>
							Оформить заказ <img src='/img/arrow.svg' alt='arrow' />
						</button>
					</div>
				</div>
			</div>

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
				<div className='d-flex align-center justify-between mb-40'>
					<h1>Все кроссовки</h1>
					<div className='search-block d-flex'>
						<img src='/img/search.svg' alt='search' />
						<input type='text' placeholder='Поиск...' />
					</div>
				</div>

				<div className='d-flex'>
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
