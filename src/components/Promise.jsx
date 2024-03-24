import React from "react";

function PromiseComp() {
  const state = false;

  const newPromise = new Promise((resolve, reject) => {
    state === true
      ? resolve("hi promise is resolved")
      : reject(" hi promise is rejected");
  });

  newPromise
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
  return <div>PromiseComp</div>;
}

export default PromiseComp;
