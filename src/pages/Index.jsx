import React from "react";
import { useLoaderData, Link } from "react-router-dom";

const Index = () => {
  const portifolios = useLoaderData();
  console.log(portifolios, "from index js hellooooo");
  return portifolios.map((portifolio) => {
    return (
      <div key={portifolio._id}>
        <Link to={`${portifolio._id}`}>{portifolio.name}</Link>
        <h3>{portifolio.Aboutme}</h3>
      </div>
    );
  });
};

export default Index;
