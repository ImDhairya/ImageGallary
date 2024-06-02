import {useEffect, useState} from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Button from "./components/Button";
import Grid from "./components/Grid";
import axios from "axios";

function App() {
  const [count, setCount] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/get")
      .then((res) => {
        console.log(res.data);
        setCount(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <Navbar />
      <Grid photos={count} />
      <Button />
    </>
  );
}

export default App;
