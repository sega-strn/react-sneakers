function Header() {
	return (
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
	);
}
export default Header;
