import React, { FC, useState, useEffect } from "react";
import axios from "axios";

//Types
import { IUser } from "../types/types";

//Components
import List from "./List";
import UserItem from "./UserItem";

const UsersPage: FC = () => {
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
    <List
      items={users}
      renderItem={(user: IUser) => <UserItem user={user} key={user.id} />}
    />
  );
};

export default UsersPage;
