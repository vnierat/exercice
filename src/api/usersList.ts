import { useEffect, useState } from "react";
import { User, RawUser } from "../interfaces";

export const useGetUsers: () => User[] = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data: RawUser[]) => {
        setUsers(
          data.map(({ id, name, username }) => ({
            id: parseInt(id),
            name,
            username,
          }))
        );
      });
  }, []);

  return users;
};
