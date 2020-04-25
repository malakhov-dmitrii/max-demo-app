import React, { useState, useEffect } from "react";
import { useRouteMatch } from "react-router-dom";

const User = () => {
  const rm = useRouteMatch();
  const [user, setUser] = useState(null);

  console.log(user);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${rm.params.id}`)
      .then((r) => r.json())
      .then((r) => setUser(r));
  }, []);

  return <div>{user && <div>Name: {user.name}</div>}</div>;
};

export default User;
