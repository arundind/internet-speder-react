// import React, { useState } from "react";

// const SpeedMeter = () => {
//   const [speed, setSpeed] = useState(0);
//   const [testing, setTesting] = useState(false);

//   const testSpeed = async () => {
//     setTesting(true);
//     setSpeed(0);

//     const fileUrl =
//       "https://corsproxy.io/?https://speed.hetzner.de/10MB.bin";
//     const fileSize = 10 * 1024 * 1024; // 10MB

//     const startTime = performance.now();

//     try {
//       const response = await fetch(fileUrl, { cache: "no-store" });
//       await response.blob();

//       const endTime = performance.now();
//       const duration = (endTime - startTime) / 1000;

//       const bitsLoaded = fileSize * 8;
//       const speedMbps = (bitsLoaded / duration / (1024 * 1024)).toFixed(2);

//       animateSpeed(parseFloat(speedMbps));
//     } catch (error) {
//       alert("Speed test failed!");
//       setTesting(false);
//     }
//   };

//   const animateSpeed = (finalSpeed) => {
//     let current = 0;
//     const interval = setInterval(() => {
//       if (current >= finalSpeed) {
//         clearInterval(interval);
//         setTesting(false);
//       } else {
//         current += finalSpeed / 50;
//         setSpeed(current.toFixed(2));
//       }
//     }, 20);
//   };

//   const getRotation = () => {
//     const maxSpeed = 100;
//     return (speed / maxSpeed) * 180;
//   };

//   return (
//     <div style={styles.container}>
//       <h2>WiFi Speed Meter</h2>

//       <div style={styles.meter}>
//         <div
//           style={{
//             ...styles.needle,
//             transform: `rotate(${getRotation()}deg)`,
//           }}
//         />
//       </div>

//       <h3>{speed} Mbps</h3>

//       <button onClick={testSpeed} disabled={testing} style={styles.button}>
//         {testing ? "Testing..." : "Start Test"}
//       </button>
//     </div>
//   );
// };

// const styles = {
//   container: {
//     textAlign: "center",
//     marginTop: "60px",
//     fontFamily: "Arial",
//   },
//   meter: {
//     width: "300px",
//     height: "150px",
//     borderTopLeftRadius: "300px",
//     borderTopRightRadius: "300px",
//     border: "12px solid #ddd",
//     borderBottom: "none",
//     margin: "auto",
//     position: "relative",
//     background: "#f9f9f9",
//   },
//   needle: {
//     width: "4px",
//     height: "140px",
//     background: "red",
//     position: "absolute",
//     bottom: "0",
//     left: "50%",
//     transformOrigin: "bottom",
//     transition: "transform 0.2s ease-out",
//   },
//   button: {
//     marginTop: "20px",
//     padding: "10px 20px",
//     fontSize: "16px",
//     cursor: "pointer",
//   },
// };

// export default SpeedMeter;
