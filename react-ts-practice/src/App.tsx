import React, { useState, useEffect } from "react";
import axios from "axios";

//Components
import Card, { CardVariant } from "./components/Card";
import UserList from "./components/UserList";
import List from "./components/List";

//Types
import { IUser } from "./types/types";
import UserItem from "./components/UserItem";

function App() {
  const [users, setUsers] = useState<IUser[]>([]);

  const fetchUsers = async () => {
    try {
      const response = await axios.get<IUser[]>(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(response.data);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

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
      <List
        items={users}
        renderItem={(user: IUser) => <UserItem user={user} key={user.id} />}
      />
    </div>
  );
}

export default App;
