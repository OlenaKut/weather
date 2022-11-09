import React, { useState, useEffect } from "react";
import { Button } from "semantic-ui-react";

function LikeButton() {
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);

  useEffect(() => {
    setCalculation(() => count + 1);
  }, [count]);

  return (
    <>
      {" "}
      <Button
        onClick={() => setCount((c) => c + 1)}
        content={calculation - 1}
        icon={{ color: "red", name: "like" }}
      ></Button>
    </>
  );
}

export default LikeButton;
