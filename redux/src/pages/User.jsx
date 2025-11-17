import React from "react";
import { useSelector } from "react-redux";

function User() {
  const users = useSelector((state) => state.users);
  console.log(users);
  return (
    <div>
      <h1>User</h1>
      {users.map((user, i) => {
        return (
          <div
            key={i}
            className="card
          "
          >
            <p>nae:{user.name}</p>
            <p>age:{user.age}</p>
            <p>email:{user.email}</p>
            <p>phone number:{user.phone}</p>
          </div>
        );
      })}
    </div>
  );
}

export default User;
