import React, { useState, useEffect } from "react";
import "./style.css";

export default function InternetSpeedTest() {

  const [downloadSpeed, setDownloadSpeed] = useState(null);
  const [uploadSpeed, setUploadSpeed] = useState(null);
  const [isp, setIsp] = useState("");
  const [loading, setLoading] = useState(false);

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
    setDownloadSpeed(null);
    setUploadSpeed(null);

    testDownload().then(() => {
      testUpload().then(() => {
        setLoading(false);
      });
    });

  };

  // DOWNLOAD TEST
  const testDownload = () => {

    return new Promise((resolve) => {

      const imageAddr =
        "https://upload.wikimedia.org/wikipedia/commons/3/3f/Fronalpstock_big.jpg";

      const downloadSize = 14679474;

      const startTime = new Date().getTime();

      const img = new Image();
      img.src = imageAddr + "?cache=" + startTime;

      img.onload = function () {

        const endTime = new Date().getTime();
        const duration = (endTime - startTime) / 1000;

        const bitsLoaded = downloadSize * 8;
        const speedMbps = (bitsLoaded / duration / 1024 / 1024).toFixed(2);

        setDownloadSpeed(speedMbps);

        resolve();
      };

      img.onerror = function () {
        setDownloadSpeed("Error");
        resolve();
      };

    });

  };

  // UPLOAD TEST
  const testUpload = () => {

    return new Promise((resolve) => {

      const data = new Blob([new ArrayBuffer(5 * 1024 * 1024)]);

      const startTime = new Date().getTime();

      fetch("https://httpbin.org/post", {
        method: "POST",
        body: data,
      })
        .then(() => {

          const endTime = new Date().getTime();
          const duration = (endTime - startTime) / 1000;

          const bitsUploaded = data.size * 8;

          const speedMbps = (
            bitsUploaded /
            duration /
            1024 /
            1024
          ).toFixed(2);

          setUploadSpeed(speedMbps);

          resolve();
        })
        .catch(() => {
          setUploadSpeed("Error");
          resolve();
        });

    });

  };

  return (

    <div className="container">

      {/* BUBBLE BACKGROUND */}

      <div className="bubbles">

        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>

      </div>

      {/* MAIN CARD */}

      <div className="card">

        <h1>My Internet Speed Test</h1>

        <p>Your Use Network: {isp}</p>

        <button onClick={startTest} disabled={loading}>
          {loading ? "Testing..." : "Start Test"}
        </button>

        <div className="result">

          {downloadSpeed && (
            <p>⬇ Download: {downloadSpeed} Mbps</p>
          )}

          {uploadSpeed && (
            <p>⬆ Upload: {uploadSpeed} Mbps</p>
          )}

        </div>

      </div>

    </div>

  );

}