import React from "react";
import * as S from "./FilterLinks.style";

const FilterLinks = ({ links, filter, setFilter }) => {
  return (
    <S.FilterLinks>
      {links.map(name => {
        return (
          <S.FilterLink
            key={name}
            className={filter === name ? "active" : ""}
            onClick={() => setFilter(name)}
          >
            {name}
          </S.FilterLink>
        );
      })}
    </S.FilterLinks>
  );
};

export default FilterLinks;
