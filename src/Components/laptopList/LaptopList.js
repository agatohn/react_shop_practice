import React from "react";
import LaptopListItem from "./laptopListItem/LaptopListItem";
import Section from "../Section";

const LaptopList = ({ laptops, addToCart }) => {
  return (
    <>
      <Section title="Ноутбуки" />
      <ul>
        {laptops.map((laptop) => (
          <LaptopListItem
            laptop={laptop}
            key={laptop.id}
            addToCart={addToCart}
          />
        ))}
      </ul>
    </>
  );
};

export default LaptopList;
