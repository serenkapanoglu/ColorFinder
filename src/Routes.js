import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Colors from "./Colors";
import NewColor from "./NewColor";

function Renkler() {
  const [colors, setColors] = useState([
    { name: "red", color: "#ff0000" },
    { name: "blue", color: "#0000ff" },
    { name: "green", color: "#00ff00" },
  ]);

  const addColor = (newColor) => {
    setColors([...colors, newColor]);
  };

  return (
    <div>
        <BrowserRouter>
      <Routes>
        <Route path="/colors">
          <Colors colors={colors} />
        </Route>
        <Route path="/colors/new">
          <NewColor addColor={addColor} />
        </Route>
        <Route path="/colors/:color"></Route>
        <Link to="/colors"></Link>
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default Renkler;