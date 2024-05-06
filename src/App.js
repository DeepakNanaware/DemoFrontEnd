import { useState, useEffect } from "react";
import "./App.css";
import AdditionForm from "./AdditionForm";
import axios from "axios";

function App() {
  const [result, setResult] = useState(0);
  const [environment, setEnvironment] = useState("");
  const handleAddition = async (number1: Number, number2: number) => {
    try {
      const response = await axios.get(
        `http://localhost:5058/api/Addition/add?num1=${number1}&num2=${number2}`
      );
      setResult(response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5058/api/Addition/environment`
        );
        setEnvironment(response.data);
        console.log("res =>", response.data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="App">
      <h1>{environment}</h1>
      <AdditionForm onAddition={handleAddition} />
      {result && <p>Sum: {result}</p>}
    </div>
  );
}

export default App;
