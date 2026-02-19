"use client";

import { useState } from "react";

export default function Home() {
  const [response, setResponse] = useState(null);

  const sendData = async () => {
    const res = await fetch("http://127.0.0.1:5000/api/post-test", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: "Parama",
        age: 22
      })
    });

    const data = await res.json();
    setResponse(data);
  };

  return (
    <div style={{ padding: "40px" }}>
      <h1>POST Method Test</h1>

      <button onClick={sendData}>
        Send Data to Backend
      </button>

      {response && (
        <div style={{ marginTop: "20px" }}>
          <p><b>{response.message}</b></p>
          <p>Name: {response.received_name}</p>
          <p>Age: {response.received_age}</p>
        </div>
      )}
    </div>
  );
}
