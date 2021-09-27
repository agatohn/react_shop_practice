import data from "../../data";
import PhoneList from "../phoneList/PhoneList";
import LaptopList from "../laptopList/LaptopList";
import { MainContainer } from "./MainStyled";
import React, { Component } from "react";
// import Section from "../Section";

class Main extends Component {
  state = {
    cart: [],
  };
  addToCart = (product) => {
    this.setState((prev) => {
      return {
        cart: [...prev.cart, product],
      };
    });
  };

  removeFromCartByID = (id) => {
    this.setState((prev) => ({
      cart: [...prev.cart.filter((product) => product.id !== id)],
    }));
  };
  removeAllFromCart = () => {
    this.setState({ cart: [] });
  };

  render() {
    return (
      <MainContainer>
        <PhoneList phones={data.phones} addToCart={this.addToCart} />

        <LaptopList laptops={data.laptops} addToCart={this.addToCart} />
      </MainContainer>
    );
  }
}

// const Main = () => {
//   return (

//   );
// };

export default Main;
