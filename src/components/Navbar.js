import React, { Component } from "react";
import "./Navbar.css";
import logo from "../images/bag_logo.png";
import cart from "../images/empty_cart.png";
import { EXCHANGE_RATES } from "../query/productQuery";
import { useQuery } from "@apollo/client";

class Navbar extends Component {
  render() {
    return (
      <>
        <div className="navbar">
          <div className="navbar_leftSection">
            <ul className="navbar_categories">
              <li>
                <a href="#">WOMEN</a>
              </li>
              <li>
                <a href="#">MEN</a>
              </li>
              <li>
                <a href="#">KIDS</a>
              </li>
            </ul>
          </div>

          <img className="navbar_logo" alt="logo" src={logo} />

          <div className="navbar_rightSection">
            <div className="exchange_section">
              <p className="exchange_p">Currency</p>
              <div className="exchange_div">
                <ExchangeRates />
              </div>
            </div>
            <div className="navbar_separationDiv"></div>
            <img className="navbar_shoppingCart" alt="cart" src={cart} />
          </div>
        </div>
      </>
    );
  }
}

function ExchangeRates() {
  const { loading, error, data } = useQuery(EXCHANGE_RATES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.rates.map(({ currency, rate }) => (
    <div key={currency}>
      <p>
        {currency}: {rate}
      </p>
    </div>
  ));
}

export default Navbar;
