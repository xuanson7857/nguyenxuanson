import React from "react";

function CartItem(props) {
  const { cartItem, onClickRemove, onClickIcrement, onClickDow } = props;

  const handcleClickRemove = (id) => {
    onClickRemove(id);
  };
  const handcleUp = (cartItem) => {
    onClickIcrement(cartItem);
  };
  const handcleDow = (cartItem) => {
    onClickDow(cartItem);
  };

  return (
    <article className="cart-item">
      <img src={cartItem.image} alt="" />
      <div className="cart-item1">
        <h4>{cartItem.title}</h4>
        <h4 className="item-price">{cartItem.price}</h4>
        <button
          onClick={() => handcleClickRemove(cartItem.id)}
          className="btn btn-danger"
        >
          remove
        </button>
      </div>
      <div className="cart-item2">
        <button onClick={() => handcleUp(cartItem)} className="btn btn-success">
          Up
        </button>

        <p className="amount">{cartItem.amount}</p>

        <button
          onClick={() => handcleDow(cartItem)}
          disabled={cartItem.amount <= 1}
          className="btn btn-success"
        >
          Down
        </button>
      </div>
    </article>
  );
}

export default CartItem;
