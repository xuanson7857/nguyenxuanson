import React from "react";
import CartItem from "./CartItem";

function CartList(props) {
  const { carts, onClickRemove, onClickIcrement, onClickDow } = props;
  console.log(carts);

  return (
    <div className="cart-list">
      {carts.map((cartItem) => (
        <CartItem
          key={cartItem.id}
          cartItem={cartItem}
          onClickRemove={onClickRemove}
          onClickIcrement={onClickIcrement}
          onClickDow={onClickDow}
        />
      ))}
    </div>
  );
}

export default CartList;
