import React from "react";
import "../style/Cart.css";
const Cart = () => {
  return (
    <>
      <div className="cart">
        <div className="cart-child">
          <img
            src="https://b.zmtcdn.com/webFrontend/e5b8785c257af2a7f354f1addaf37e4e1647364814.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*"
            alt="error"
          />
          <p className="child-p1">Order Online </p>{" "}
          <p className="child-p2">Stay home and order to your doorstep</p>
        </div>
        <div className="cart-child">
          <img
            src="https://b.zmtcdn.com/webFrontend/d026b357feb0d63c997549f6398da8cc1647364915.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*"
            alt="error"
          />{" "}
          <p className="child-p1">Dining</p>
          <p className="child-p2">View the city's favourite dining venues</p>
        </div>
      </div>
      <br />

      {/* containet start */}
      <div className="container">
        <div className="cont-div">
          <img
            src="https://images.ctfassets.net/23u853certza/1kzp2EUrsrUWL0AWyzKLed/c141395ab28968f1ee8256057db21439/WAW_office_party.webp?w=640&q=75&fm=webp"
            alt="error"
          />
          <p>Office party</p>
        </div>
        <div className="cont-div">
          <img
            src="https://images.ctfassets.net/23u853certza/1Jx7PSKJQ5wbn8aKtdHZIa/87777869c1b7d34fd00ce618cfe676a0/WAW_virtual_event.webp?w=640&q=75&fm=webp"
            alt="error"
          />
          <p>Virtual event</p>
        </div>
        <div className="cont-div">
          <img
            src="https://images.ctfassets.net/23u853certza/6TOgi4lPVBzKQG76woULQq/b23134ad2a2dc48297465bc083c8061a/WAW_cleant_meeting.webp?w=640&q=75&fm=webp"
            alt="error"
          />
          <p>Client meeting</p>
        </div>
      </div>
    </>
  );
};

export default Cart;
