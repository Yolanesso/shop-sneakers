import React from 'react';

export default function Header(props) {
  return (
    <header className="d-flex justify-between align-center p-40">
      <div className="d-flex align-center">
        <img width={40} height={40} src="img/logo.png" alt="" />
        <div>
          <h3 className="text-uppercase">Sibsutis sneakers</h3>
          <p className="opacity-5">Магазин лучших кроссовок</p>
        </div>
      </div>
      <ul className="d-flex">
        <li onClick={props.onClickCart} className="mr-30 cu-p">
          <img width={18} height={18} src="img/cart.svg" alt="cart" />
          <span>1205 рублей</span>
        </li>
        <li>
          <img width={18} height={18} src="img/user.svg" alt="user" />
        </li>
      </ul>
    </header>
  );
}
