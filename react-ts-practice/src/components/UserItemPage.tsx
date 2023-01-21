import React, { FC, useState, useEffect } from "react";
import axios from "axios";

import { IUser } from "../types/types";
import { useParams, useNavigate } from "react-router-dom";

type UserItemPageParams = {
  id: string;
};

const UserItemPage: FC = () => {
  const [user, setUser] = useState<IUser | null>(null);
  const params = useParams<UserItemPageParams>();
  const navigate = useNavigate();

  const fetchUser = async () => {
    try {
      const response = await axios.get<IUser>(
        `https://jsonplaceholder.typicode.com/users/${params.id}`
      );
      setUser(response.data);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);
  return (
    <div>
      <button onClick={() => navigate(-1)}>Back</button>
      <h1> Page of User {user?.name}</h1>
      <div>{user?.email}</div>
      <div>{user?.address.city}</div>
    </div>
  );
};

export default UserItemPage;
