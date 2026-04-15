import React from "react";

function App() {

  const handleDownload = () => {
    window.location.href = "/files.zip";
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Download Files</h1>
      <button onClick={handleDownload}>
        Download button1
      </button>
        <a href="files.zip" download>
           <button>Download button 2</button>
        </a>
    </div>
  );
}

export default App;