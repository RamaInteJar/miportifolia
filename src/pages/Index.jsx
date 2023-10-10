import React from "react";
import { useLoaderData, Link, Form } from "react-router-dom";

const Index = () => {
  const portifolios = useLoaderData();
  console.log(portifolios, "from index js hellooooo");
  return (
    <div>
      {/* <h2>Create a profile</h2>
      <Form action="/create" method="post">
        <input type="text" name="name" placeholder="person's name" />
        <input type="input" name="image" placeholder="person's picture" />
        <input type="input" name="title" placeholder="person's title" />
        <input type="submit" value="create person" />
      </Form>
      <h2>Portfolio</h2> */}
      {portifolios.map((portifolio) => {
        return (
          <div key={portifolio._id}>
            <Link to={`${portifolio._id}`} className="text-3xl">
              {portifolio.Name}
            </Link>
            <h3>{portifolio.Aboutme}</h3>
          </div>
        );
      })}
      ;
    </div>
  );
};

export default Index;
