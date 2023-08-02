import { useState } from "react";
import Welcome from "./Welcome";

const ListComponent = () => {
  const [users, setUsers] = useState([
    { username: "홍길동", age: 12, major: "경역학" },
    { username: "고길동", age: 22, major: "무역학" },
    { username: "나길동", age: 32, major: "국문학" },
  ]);
  return (
    <div>
      {users.map((user) => {
        return <Welcome userName={user.username} age={user.age} />;
      })}
    </div>
  );
};

export default ListComponent;
