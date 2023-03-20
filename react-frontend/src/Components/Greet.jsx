import React from "react";

const Greet = ({name,place,children}) => {
//   console.log(props);
  return (
    <div>
      <h1>
        Greetings {name}. Welcome to {place}.
      </h1>
      {children}
    </div>
  );
};

export default Greet;
