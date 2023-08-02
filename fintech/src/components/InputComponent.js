import { useState } from "react";

const InputComponent = () => {
  const [username, setUserName] = useState("홍길동");

  const handleClick = () => {
    console.log("클릭");
  };

  const handleChange = (e) => {
    setUserName(e.target.value);
  };
  return (
    <div>
      <p>{username}</p>
      <input onChange={handleChange} />
      <button onClick={handleClick}>입력</button>
    </div>
  );
};

export default InputComponent;
