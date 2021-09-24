import React from "react";
import data from "../../data";
import PhoneList from "../phoneList/PhoneList";
import LaptopList from "../laptopList/LaptopList";
import { MainContainer } from "./MainStyled";

const Main = () => {
  return (
    <MainContainer>
      <PhoneList phones={data.phones} />
      <LaptopList laptops={data.laptops} />
    </MainContainer>
  );
};

export default Main;
