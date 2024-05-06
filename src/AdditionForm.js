import React, { useState } from "react";

function AdditionForm({ onAddition }) {
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddition(number1, number2);
    setNumber1(""); // Clear input fields after submission
    setNumber2("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="number1">Number 1:</label>
      <input
        type="number"
        id="number1"
        value={number1}
        onChange={(e) => setNumber1(e.target.value)}
        required
      />
      <br />
      <label htmlFor="number2">Number 2:</label>
      <input
        type="number"
        id="number2"
        value={number2}
        onChange={(e) => setNumber2(e.target.value)}
        required
      />
      <br />
      <button type="submit">Add</button>
    </form>
  );
}

export default AdditionForm;
