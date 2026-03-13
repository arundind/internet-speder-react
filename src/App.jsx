// import React, { useState } from "react";
import "./App.css";

// function App() {
//   const [speed, setSpeed] = useState(null);
//   const [isTesting, setIsTesting] = useState(false);

//   const testSpeed = () => {
//     setIsTesting(true);
//     setSpeed(null);

//     const imageAddr = "https://upload.wikimedia.org/wikipedia/commons/3/3f/Fronalpstock_big.jpg";
//     const downloadSize = 5245329; // bytes (approx size of image)
//     const cacheBuster = "?nnn=" + new Date().getTime();

//     const startTime = new Date().getTime();
//     const img = new Image();

//     img.onload = function () {
//       const endTime = new Date().getTime();
//       const duration = (endTime - startTime) / 1000;

//       const bitsLoaded = downloadSize * 8;
//       const speedBps = bitsLoaded / duration;
//       const speedMbps = (speedBps / (1024 * 1024)).toFixed(2);

//       setSpeed(speedMbps);
//       setIsTesting(false);
//     };

//     img.onerror = function () {
//       alert("Error testing speed. Try again.");
//       setIsTesting(false);
//     };

//     img.src = imageAddr + cacheBuster;
//   };

//   return (
//     <div style={styles.container}>
//       <h1>Internet Speed Test</h1>

//       <button onClick={testSpeed} disabled={isTesting} style={styles.button}>
//         {isTesting ? "Testing..." : "Start Test"}
//       </button>

//       {speed && (
//         <div style={styles.result}>
//           <h2>{speed} Mbps</h2>
//         </div>
//       )}
//     </div>
//   );
// }

// const styles = {
//   container: {
//     textAlign: "center",
//     marginTop: "100px",
//     fontFamily: "Arial",
//   },
//   button: {
//     padding: "10px 20px",
//     fontSize: "16px",
//     cursor: "pointer",
//   },
//   result: {
//     marginTop: "20px",
//   },
// };

// export default App;
import InternetSpeedTest from "./component/InternetSpeedTest";

function App() {
  return <InternetSpeedTest />;
}

export default App;
