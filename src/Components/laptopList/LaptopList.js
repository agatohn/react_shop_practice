import React from "react";
import LaptopListItem from "./laptopListItem/LaptopListItem";
import Section from "../Section";

const LaptopList = ({ laptops }) => {
  return (
    <>
      <Section title="Ноутбуки" />
      <ul>
        {laptops.map((laptop) => (
          <LaptopListItem laptop={laptop} key={laptop.id} />
        ))}
      </ul>
    </>
  );
};

export default LaptopList;
