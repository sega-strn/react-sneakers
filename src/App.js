import Card from './components/Card';
import Drawer from './components/Drawer';
import Header from './components/Header';

const arr = [
	{
		id: 1,
		title: 'Мужские Кроссовки Nike Blazer Mid Suede',
		price: '12 999 руб.',
		price: 12999,
		imageUrl: '/img/snickers/image 8.jpeg',
	},
	{
		id: 2,
		title: 'Мужские Кроссовки Nike Air Max 270',
		price: '15 699 руб.',
		price: 15600,
		imageUrl: '/img/snickers/crosi1.jpeg',
	},
	{
		id: 3,
		title: 'Мужские Кроссовки Nike Blazer Mid Suede',
		price: '15 699 руб.',
		price: 13999,
		imageUrl: '/img/snickers/image 7.jpeg',
	},
	{
		id: 4,
		title: 'Мужские Кроссовки Under Armour Curry 8',
		price: '15 699 руб.',
		price: 8699,
		imageUrl: '/img/snickers/image 10.jpeg',
	},
];

function App() {
	return (
		<div className="wrapper clear">
			<Drawer />
			<Header />
			<section className="content p-40">
				<div className="d-flex align-center justify-between mb-40">
					<h1>Все кроссовки</h1>
					<div className="search-block d-flex">
						<img src="/img/search.svg" alt="search" />
						<input type="text" placeholder="Поиск..." />
					</div>
				</div>

				<div className="d-flex">
					{arr.map(obj => (
						<Card
							title={obj.title}
							price={obj.price}
							imageUrl={obj.imageUrl}
							onClic={() => console.log('Click')}
						/>
					))}
				</div>
			</section>
		</div>
	);
}

export default App;
