import { useState } from "react";

const StateComponent = () => {
  const [userName, setUserName] = useState("홍길동");

  setInterval(() => {
    setUserName("고길동");
  }, 5000);
  return (
    <div>
      <p>상태 관련 코드</p>
      이름 : {userName}
    </div>
  );
};

export default StateComponent;
