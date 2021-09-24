import React from "react";
import data from "../../../data";
import { HeaderlistContainer } from "./headerListStyled";

const HeaderList = () => {
  return (
    <HeaderlistContainer>
      <ul className="headerList">
        {data.header.map((headerItem) => (
          <li className="headerListItem" key={headerItem}>
            {headerItem}
          </li>
        ))}
      </ul>
    </HeaderlistContainer>
  );
};

export default HeaderList;
