import React, { useState } from "react";

let Product = [
  {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    rating: { rate: 3.9, count: 120 },
  },
  {
    id: 2,
    title: "Mens Casual Premium Slim Fit T-Shirts ",
    price: 22.3,
    description:
      "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    category: "men's clothing",
    image:
      "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    rating: { rate: 4.1, count: 259 },
  },
  {
    id: 3,
    title: "Mens Cotton Jacket",
    price: 55.99,
    description:
      "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    rating: { rate: 4.7, count: 500 },
  },
  {
    id: 4,
    title: "Mens Casual Slim Fit",
    price: 15.99,
    description:
      "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
    rating: { rate: 2.1, count: 430 },
  },
];
const Task3 = () => {
  const [count, setCount] = useState(0);

  function handleInc() {
    setCount(count + 1);
  }

  function handleDec() {
    setCount(count - 1);
  }

  return (
    <div>
      <div
        style={{
          width: "90%",
          margin: "auto",
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: "25px",
          marginTop: "15px",
        }}
      >
        {Product.map((item, i) => {
          return (
            <>
              <div
                style={{
                  boxShadow:
                    "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset",
                  padding: "10px",
                  borderRadius: "15px",
                }}
              >
                <img
                  style={{ width: "100%", height: "250px" }}
                  src={item.image}
                  alt=""
                />{" "}
                <h4> Title:- {item.title} </h4>
                <h2> Price:- {item.price}</h2>
                <p>Id:- {item.id}</p>
                <button className="btn btn-primary w-25" onClick={handleDec}>
                  -
                </button>
                <label>{count}</label>
                <button className="btn btn-primary w-25" onClick={handleInc}>
                  +
                </button>
                <br />
                <button className="btn btn-danger w-75">Add</button>
              </div>
            </>
          );
        })}{" "}
      </div>
    </div>
  );
};

export default Task3;
