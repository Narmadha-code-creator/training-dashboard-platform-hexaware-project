import { useState } from "react";
import axios from "axios";

export default function Dashboard() {
  const [code, setCode] = useState("");
  const [result, setResult] = useState("");

  const submitCode = async () => {
    const token = localStorage.getItem("token");

    const res = await axios.post(
      "http://localhost:5000/api/assessment",
      { code },
      { headers: { Authorization: token } }
    );

    setResult(res.data.result);
  };

  return (
    <div>
      <h2>AI Code Evaluation</h2>
      <textarea rows="10" onChange={e=>setCode(e.target.value)} />
      <button onClick={submitCode}>Evaluate</button>
      <p>{result}</p>
    </div>
  );
}


