import { useState } from "react";
import AppHeader from "../components/common/AppHeader";
import axios from "axios";

const LoginPage = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeId = (e) => {
    setId(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleClick = () => {
    console.log(`${id} ${password}`);

    let option = {
      url: "/login",
      method: "POST",
      header: {
        "Content-Type": "application/json",
      },
      data: {
        id: id,
        password: password,
      },
    };

    axios(option).then((res) => {
      console.log("성공");
    });
  };
  return (
    <div>
      <AppHeader title={"로그인"}></AppHeader>
      <div>
        id: <input onChange={handleChangeId}></input>
        password:{" "}
        <input type="password" onChange={handleChangePassword}></input>
        <button onClick={handleClick}>검색</button>
      </div>
    </div>
  );
};

export default LoginPage;
