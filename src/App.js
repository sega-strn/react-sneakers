import Card from "./components/Card";
import Drawer from "./components/Drawer";
import Header from "./components/Header";

function App() {
	return (
		<div className='wrapper clear'>
			<Drawer />
			<Header />
			<section className='content p-40'>
				<div className='d-flex align-center justify-between mb-40'>
					<h1>Все кроссовки</h1>
					<div className='search-block d-flex'>
						<img src='/img/search.svg' alt='search' />
						<input type='text' placeholder='Поиск...' />
					</div>
				</div>

				<div className='d-flex'>
					<Card />
					<Card />
					<Card />
					<Card />
				</div>
			</section>
		</div>
	);
}

export default App;
