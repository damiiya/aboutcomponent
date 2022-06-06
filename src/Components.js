import React from "react";

const One = () => {
  const [name, setName] = React.useState("dAM");

  return (
    <div>
      <h1>One</h1>
      <p>{name}</p>
      <button
        onClick={() => {
          setName("perl");
        }}
      >
        change!
      </button>
    </div>
  );
};

const Two = () => {
  return (
    <div>
      <h1>Two</h1>
    </div>
  );
};

export default One;
export { Two };
