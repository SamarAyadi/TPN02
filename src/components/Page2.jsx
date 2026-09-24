import { useState } from "react";

function Page2() {
  let [nb, setNb] = useState(0);

  const Incrementer = () => {
    setNb(nb + 1);
  };

  const Decrementer = () => {
    setNb(nb - 1);
  };

  return (
    <>
      <h2>Exemple Compteur avec useState</h2>
      <h3>Compteur : {nb}</h3>
      <button onClick={Incrementer}>Incrementer</button>{" "}
      <button onClick={Decrementer}>Decrementer</button>
    </>
  );
}

export default Page2;
