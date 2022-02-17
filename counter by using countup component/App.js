import React from "react";
// import { useState, useEffect } from "react";
import CountUp from "react-countup";
// function App() {
//   const [value, setValue] = useState(0);
//   useEffect(() => {
//     setTimeout(setValue(value + 1), 1000);
//   });
//   return (
//     <body style={{ textAlign: "center" }}>
//       <section>Welcome to automatic Counter</section>
//       {value}
//     </body>
//   );
// }
const App = () => {
  return (
    <>
      <body style={{textAlign:"center",fontSize:"30px"}}>
        <section>Welcome to automatic counter which start from 0 and end with 1000</section>
        <CountUp start={0} end={1000} duration={1000}/>
      </body>
    </>
  );
};

export default App;
