import React, { useState } from "react";

export default function InternetSpeedTest() {
  const [speed, setSpeed] = useState(null);
  const [loading, setLoading] = useState(false);

  const startTest = () => {
    setLoading(true);
    setSpeed(null);

    const imageAddr =
      "https://upload.wikimedia.org/wikipedia/commons/3/3f/Fronalpstock_big.jpg";

    const downloadSize = 14679474; // bytes

    const startTime = new Date().getTime();

    const img = new Image();
    img.src = imageAddr + "?cache=" + startTime;

    img.onload = function () {
      const endTime = new Date().getTime();
      const duration = (endTime - startTime) / 1000;

      const bitsLoaded = downloadSize * 8;
      const speedBps = bitsLoaded / duration;
      const speedKBps = speedBps / 1024;
      const speedMBps = speedKBps / 1024;

      setSpeed({
        kb: speedKBps.toFixed(2),
        mb: speedMBps.toFixed(2),
      });

      setLoading(false);
    };

    img.onerror = function () {
      setSpeed("Error testing speed");
      setLoading(false);
    };
  };

  return (
    <div style={styles.container}>
      <h1>Internet Speed Test</h1>

      <button onClick={startTest} disabled={loading} style={styles.button}>
        {loading ? "Testing..." : "Start Test"}
      </button>

      {speed && typeof speed === "object" && (
        <div style={styles.result}>
          <p>Speed: {speed.kb} KB/s</p>
          <p>Speed: {speed.mb} MB/s</p>
        </div>
      )}

      {speed && typeof speed === "string" && (
        <div style={styles.result}>{speed}</div>
      )}
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    marginTop: "100px",
    fontFamily: "Arial",
  },
  button: {
    padding: "10px 20px",
    fontSize: "18px",
    cursor: "pointer",
  },
  result: {
    marginTop: "20px",
    fontSize: "20px",
    fontWeight: "bold",
  },
};
