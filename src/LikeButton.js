import React, { useState, useEffect } from "react";
import { Button } from "semantic-ui-react";

function LikeButton() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount((count) => count + 1);
  }, []);

  return (
    <>
      {" "}
      <Button
        onClick={() => setCount((c) => c + 1)}
        content={count - 1}
        icon={{ color: "red", name: "like" }}
      ></Button>
    </>
  );
}

export default LikeButton;
