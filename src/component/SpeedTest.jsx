import React, { useState } from "react";

const SpeedTest = () => {
  const [speed, setSpeed] = useState(null);
  const [testing, setTesting] = useState(false);

  const testDownloadSpeed = async () => {
    setTesting(true);
    setSpeed(null);

    const imageAddr = "https://speed.hetzner.de/100MB.bin"; 
    const fileSizeInBytes = 100 * 1024 * 1024; // 100MB

    const startTime = new Date().getTime();

    try {
      const response = await fetch(imageAddr, { cache: "no-store" });
      await response.blob(); // force full download

      const endTime = new Date().getTime();
      const durationInSeconds = (endTime - startTime) / 1000;

      const bitsLoaded = fileSizeInBytes * 8;
      const speedBps = bitsLoaded / durationInSeconds;
      const speedMbps = (speedBps / (1024 * 1024)).toFixed(2);

      setSpeed(speedMbps);
    } catch (error) {
      console.error("Speed test failed:", error);
      alert("Speed test failed. Try again.");
    }

    setTesting(false);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Internet Speed Tester</h2>

      <button onClick={testDownloadSpeed} disabled={testing}>
        {testing ? "Testing..." : "Start Speed Test"}
      </button>

      {speed && (
        <h3 style={{ marginTop: "20px" }}>
          Download Speed: {speed} Mbps
        </h3>
      )}
    </div>
  );
};

export default SpeedTest;
