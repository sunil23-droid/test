import React from "react";

function Products(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>{props.description}</p>
      <p>{props.price}</p>
    </div>
  );
}


// Here we define default values for the props if they are not passed to the component
Products.defaultProps = {
  name: "temitope",
  description: "i like this feature",
  price: 500,
};

export default Products;