import React, { useState, useEffect } from "react";
import "./style.css";

export default function InternetSpeedTest() {
  const [speed, setSpeed] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isp, setIsp] = useState("");

  // Detect Internet Provider
  useEffect(() => {
    fetch("https://ipapi.co/json/")
      .then((res) => res.json())
      .then((data) => {
        setIsp(data.org);
      })
      .catch(() => {
        setIsp("Unknown Network");
      });
  }, []);

  const startTest = () => {
    setLoading(true);
    setSpeed(null);

    const imageAddr =
      "https://upload.wikimedia.org/wikipedia/commons/3/3f/Fronalpstock_big.jpg";

    const downloadSize = 14679474;

    const startTime = new Date().getTime();

    const img = new Image();
    img.src = imageAddr + "?cache=" + startTime;

    img.onload = function () {
      setTimeout(() => {
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
      }, 10000);
    };

    img.onerror = function () {
      setSpeed("Error testing speed");
      setLoading(false);
    };
  };

  return (
    <div className="container">

      <div className="bubbles">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className="card">
        <h1>My Internet Speed Test</h1>

        {/* Internet Provider Name */}
        <p>Network: {isp}</p>

        <button onClick={startTest} disabled={loading}>
          {loading ? "Testing... (10s)" : "Start Test"}
        </button>

        {speed && typeof speed === "object" && (
          <div className="result">
            <p>Speed: {speed.kb} KB/s</p>
            <p>Speed: {speed.mb} MB/s</p>
          </div>
        )}

        {speed && typeof speed === "string" && (
          <div className="result">{speed}</div>
        )}
      </div>
    </div>
  );
}