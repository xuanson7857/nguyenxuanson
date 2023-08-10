import React from "react";

function FooterCart(props) {
  const { moneyToltal } = props;
  return (
    <div className="container">
      <div className="cart-total">
        <h4>to spend {moneyToltal} you have money</h4>
      </div>
    </div>
  );
}

export default FooterCart;
