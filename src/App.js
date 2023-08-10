import logo from "./logo.svg";
import "./index.css";
import Navbar from "./component/Navbar";
import CartList from "./component/CartList";
import FooterCart from "./component/FooterCart";
import { useState } from "react";
import cartList from "./sever.js/sever.js";

function App() {
  const [carts, setCarts] = useState(cartList);
  function cartToltal() {
    let cartToltal = 0;
    for (let i = 0; i < carts.length; i++) {
      cartToltal = cartToltal + carts[i].amount;
    }
    return cartToltal;
  }
  function moneyToltal() {
    let moneyToltal = 0;
    for (let i = 0; i < carts.length; i++) {
      moneyToltal = moneyToltal + carts[i].price * carts[i].amount;
    }
    return moneyToltal;
  }
  const handcleClickRemove = (id) => {
    const newStateCart = carts.filter((cartItem) => cartItem.id !== id);
    setCarts(newStateCart);
  };
  const cartItem = (cartItem) => {
    console.log(cartItem);
    const elementIndex = carts.findIndex(
      (element) => element.id === cartItem.id
    );
    console.log(elementIndex);
    const carstNewState = [...carts];
    carstNewState[elementIndex] = { ...cartItem };

    carstNewState[elementIndex].amount++;
    console.log(carts);

    setCarts(carstNewState);
  };
  const dowItem = (cartItem) => {
    console.log(cartItem);
    const elementIndex = carts.findIndex(
      (element) => element.id === cartItem.id
    );
    console.log(elementIndex);
    const carstNewState = [...carts];
    carstNewState[elementIndex] = { ...cartItem };

    carstNewState[elementIndex].amount--;
    console.log(carts);

    setCarts(carstNewState);
  };

  if (carts.length === 0) {
    return (
      <section className="cart">
        <header>
          <h2>your bag</h2>
          <h4 className="empty-cart">is current Empty</h4>
        </header>
      </section>
    );
  }

  return (
    <main>
      <Navbar cartToltal={cartToltal()} />
      <section className="cart">
        <header>
          <h2>your bag</h2>
        </header>

        <CartList
          carts={carts}
          onClickRemove={handcleClickRemove}
          onClickIcrement={cartItem}
          onClickDow={dowItem}
        />
        <FooterCart moneyToltal={moneyToltal()} />

        {/* //cartList */}
      </section>
    </main>
  );
}

export default App;
