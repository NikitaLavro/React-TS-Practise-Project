import React from "react";

//Components
import Card, { CardVariant } from "./components/Card";

function App() {
  return (
    <div className="App">
      <Card width="300px" height="50px" variant={CardVariant.primary}>
        <button>Click Me</button>
      </Card>
    </div>
  );
}

export default App;
