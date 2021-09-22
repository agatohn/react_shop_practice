import React from "react";
import data from "../../../data";

const HeaderList = () => {
  return (
    <nav>
      <ul>
        {data.header.map((headerItem) => (
          <li key={headerItem}>{headerItem}</li>
        ))}
      </ul>
    </nav>
  );
};

export default HeaderList;
