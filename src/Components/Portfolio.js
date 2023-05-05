import { useState } from "react";
import "./PortfolioStyle.css";

export default function Portfolio() {
  const Portfolio = [
    {
      id: 1,
      image: "./images/ebookstore.png",
      name: "E-Book Store",
      link: "/",
      category: "Ecommerce",
      description: "customer can view and  buy their interested books"
    },
    {
      id: 2,
      image: "./images/grocerystore.png",
      name: "Grocery Store",
      link: "/",
      category: "Ecommerce",
      description: "customer can view products and buy their interest items"
    },
    {
      id: 3,
      image: "./images/columncard.png",
      name: "Three-column card",
      link: "/",
      category: "Business",
      description:
        "This card usually used for pricing and for details about products"
    },
    {
      id: 4,
      image: "./images/loginsignup.png",
      name: "Login & Reg Form",
      link: "/",
      category: "Ecommerce",
      description:
        "User can log in with their emails and password, also signup."
    },
    {
      id: 5,
      image: "./images/travelweb.png",
      name: "Travel Website",
      link: "/",
      category: "Ecommerce",
      description:
        "It is just a idea of landing page for a travel booking website"
    },
    {
      id: 6,
      image: "./images/productcard.png",
      name: "Product Card Design",
      link: "/",
      category: "Ecommerce",
      description:
        "It is just a idea of ecommerce or shopify product card with cart section."
    },
    {
      id: 7,
      image: "./images/landingpage.png",
      name: "Landing Page",
      link: "/",
      category: "Business",
      description:
        "Landing page design with an idea of Light/Dark Theme switch with button"
    },
    {
      id: 8,
      image: "./images/singlecomponent.png",
      name: "Single price Grid",
      link: "/",
      category: "Business",
      description: "Landing page design with an idea of text switching auto."
    },
    {
      id: 9,
      image: "./images/landingpage2.png",
      name: "Landing Page",
      link: "/",
      category: "Business",
      description: "Landing page design with an idea of text switching auto."
    },
    {
      id: 10,
      image: "./images/login.png",
      name: "Login & Reg Form",
      link: "https://ahmadideas.000webhostapp.com/index.php",
      category: "Php",
      description:
        "Click to preview Login and Registration form with authentication and e-mail verification"
    }
  ];

  const [items, setItems] = useState(Portfolio);

  const filteritem = (categItem) => {
    const updatedItems = Portfolio.filter((item) => {
      return item.category === categItem;
    });
    setItems(updatedItems);
  };

  return (
    <div className="portfolio">
      <h2>Portfolio</h2>
      <div className="buttons">
        <h2>Latest Projects</h2>
        <ul>
          <li>
            <button className="btn" onClick={() => setItems(Portfolio)}>
              All
            </button>
          </li>
          <li>
            <button className="btn" onClick={() => filteritem("Ecommerce")}>
              E-commerce
            </button>
          </li>
          <li>
            <button className="btn" onClick={() => filteritem("Php")}>
              Php
            </button>
          </li>
          <li>
            <button className="btn" onClick={() => filteritem("Business")}>
              Business
            </button>
          </li>
        </ul>
      </div>
      <div className="portfolio-cards">
        {items.map((item, key) => {
          return (
            <div className="p-cards" key={item.id}>
              <a href={item.link}>
                <img src={item.image} alt="portfolio-img" />
              </a>
              <h4>{item.name}</h4>
              <p>{item.description}</p>
            </div>
          );
        })}
        ;
      </div>
    </div>
  );
}
