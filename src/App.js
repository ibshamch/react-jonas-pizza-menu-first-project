import React from "react";
import "./index.css";
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

export default App;

function Header() {
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 8;
  const closeHour = 24;
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <footer className="footer">
      {/* && true ho to next render hoga
       || false ho to next render hoga */}
      {isOpen && <Order closeHour={closeHour} />}
    </footer>
  );
}

function Order({ closeHour }) {
  return (
    <div className="order">
      <p>{`We are open until ${closeHour}:00. Come visit us or order online.`}</p>
      <button className="btn">Order</button>
    </div>
  );
}

function Menu() {
  const pizzas = pizzaData;
  const numPizzas = pizzas.length;

  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {/*  */}
      {numPizzas > 0 ? (
        <>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious
          </p>
          <ul className="pizzas">
            {pizzaData.map((pizza) => {
              const { name } = pizza;
              return <Pizza pizza={pizza} key={name} />;
            })}
          </ul>
        </>
      ) : (
        <p>We are still working on the menu.Please come back later</p>
      )}
    </main>
  );
}

function Pizza({ pizza }) {
  const { photoName, name, ingredients, price } = pizza;

  return (
    <li className={`pizza ${pizza.soldOut ? "sold-out" : ""}`}>
      <img src={photoName} alt="pizza-pic" />
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
        <span>{pizza.soldOut ? "Sold Out" : price}</span>
      </div>
      {/*webpack automatically detects from public folder*/}
    </li>
  );
}
