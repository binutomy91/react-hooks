import React, { useState } from "react";
import ReactDOM from "react-dom";

export default function Hook(props) {
  const [name, setName] = useState("Binu");

  function handleNameChange(e) {
    setName(e.target.value);
  }

  return (
    <div className="main-container">
      <section>
        <input value={name} onChange={handleNameChange} />
      </section>
    </div>
  );
}
