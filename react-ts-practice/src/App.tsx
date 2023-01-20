import React from "react";

//Components
import Card, { CardVariant } from "./components/Card";
import UserList from "./components/UserList";

function App() {
  const users = [
    {
      id: 1,
      name: "Nikita",
      email: "asdasd@gmail.com",
      address: { city: "Kharkiv", street: "123 street", zipCode: "12331" },
    },
    {
      id: 2,
      name: "Igor",
      email: "vcxvxcv@gmail.com",
      address: { city: "Kiev", street: "sfsdf street", zipCode: "12331" },
    },
  ];
  return (
    <div className="App">
      <Card
        width="300px"
        height="50px"
        variant={CardVariant.primary}
        onClick={(num) => console.log(num)}
      >
        <button>Click Me</button>
      </Card>
      <UserList users={users} />
    </div>
  );
}

export default App;
