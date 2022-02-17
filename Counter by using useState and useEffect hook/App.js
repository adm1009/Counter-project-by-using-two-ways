import "./App.css";
import React, { useEffect } from "react";
import { useState } from "react";
function App() {
  const [base, setBase] = useState(0);
  useEffect(() => {
    document.title = `Count (${base})`;
  });
  const addHandler = () => {
    if (base < 101) {
      setBase(base + 1);
    }
  };
  const subHandler = () => {
    if (base > 0) {
      setBase(base - 1);
    }
  };
  return (
    <>
      <section style={{ textAlign: "center" }}>
        <section style={{color:"black", border:"solid",margin:"10px 470px 0px 470px", backgroundColor:"orange", fontSize:"16px", fontWeight:"bold"}}>
          <h1>Welcome to the world of counter...</h1>
        </section>
        <h1>{base}</h1>
        <button onClick={addHandler} style={{ margin: "5px" ,backgroundColor: "white",color: "blue", border: "2px solid #4CAF50"}}>
          (+)
        </button>
        <button onClick={subHandler} style={{ margin: "5px" ,backgroundColor: "white",color: "blue", border: "2px solid #4CAF50"}}>
          (-)
        </button>
      </section>
    </>
  );
}

export default App;
