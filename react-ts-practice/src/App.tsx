import React, { useState, useEffect } from "react";
import axios from "axios";

//Components
import Card, { CardVariant } from "./components/Card";
import UserList from "./components/UserList";
import List from "./components/List";
import EventsExample from "./components/EventsExample";

//Types
import { ITodo, IUser } from "./types/types";
import UserItem from "./components/UserItem";
import TodoItem from "./components/TodoItem";

function App() {
  const [users, setUsers] = useState<IUser[]>([]);
  const [todos, setTodos] = useState<ITodo[]>([]);

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

  const fetchTodos = async () => {
    try {
      const response = await axios.get<ITodo[]>(
        "https://jsonplaceholder.typicode.com/todos?_limit=10"
      );
      setTodos(response.data);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    fetchUsers();
    fetchTodos();
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
      <EventsExample />
      <List
        items={users}
        renderItem={(user: IUser) => <UserItem user={user} key={user.id} />}
      />
      <List
        items={todos}
        renderItem={(todo: ITodo) => <TodoItem todo={todo} key={todo.id} />}
      />
    </div>
  );
}

export default App;
