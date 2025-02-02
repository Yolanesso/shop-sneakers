import React from 'react';
import Card from './components/Card/';
import Drawer from './components/Drawer';
import Header from './components/Header';

const sneakersArray = [
  { title: 'Мужские Кроссовки Nike Blazer Mid Suede', price: 12999, imageUrl: 'img/1.jpg' },
  { title: 'Мужские Кроссовки Nike Air Max 270', price: 15999, imageUrl: 'img/2.jpg' },
  { title: 'Мужские Кроссовки Nike Blazer Mid Suede', price: 8499, imageUrl: 'img/3.jpg' },
  { title: 'Кроссовки Puma X Aka Boku Future Rider', price: 10000, imageUrl: 'img/4.jpg' },
];

function App() {
  const [cardOpened, setCartOpened] = React.useState(false);

  return (
    <div className="wrapper clear">
      {cardOpened ? <Drawer onClose={() => setCartOpened(false)} /> : null}
      <Header onClickCart={() => setCartOpened(true)} />
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="search" />
            <input type="text" placeholder="Поиск..." />
          </div>
        </div>
        <div className="d-flex">
          {sneakersArray.map((obj) => (
            <Card
              title={obj.title}
              price={obj.price}
              imageUrl={obj.imageUrl}
              onPlus={() => console.log('Добавили в закладки')}
              onFavorite={() => console.log('Добавили в избранное')}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
