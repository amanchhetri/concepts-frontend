import React, { useState } from "react";

function PromiseComp() {
  const [val, setVal] = useState("");
  const state = false;

  const newPromise = new Promise((resolve, reject) => {
    state === true
      ? resolve("hi promise is resolved")
      : reject(" hi promise is rejected");
  });

  newPromise.then((data) => setVal(data)).catch((error) => setVal(error));
  return <div>PromiseComp: {val}</div>;
}

export default PromiseComp;
