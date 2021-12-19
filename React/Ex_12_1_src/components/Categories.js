import React from "react";

export default function Categories(props) {
  const displayCategories = () => {
    return props.categories.map((category) => {
      return (
        <div>
          <button onClick={(e) => props.clickFn(e.target.innerText)}>
            {category}
          </button>
        </div>
      );
    });
  };
  return <div>{displayCategories()}</div>;
}
