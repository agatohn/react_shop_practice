import React from "react";
import PhoneListItem from "./phoneListItem/PhoneListItem";
import Section from "../Section";

const PhoneList = ({ phones }) => {
  return (
    <>
      <Section title="Мобильные телефоны" />
      <ul>
        {phones.map((phone) => (
          <PhoneListItem phone={phone} key={phone.id} />
        ))}
      </ul>
    </>
  );
};

export default PhoneList;
