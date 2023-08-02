import AppHeader from "../components/common/AppHeader";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import axios from "axios";
import { useState } from "react";

const AuthResultPage = () => {
  const [accessToken, setAccessToken] = useState("");
  const [userSeqNo, setUserSeqNo] = useState("");
  const queryParams = useLocation().search;
  console.log(queryParams);

  const parsed = queryString.parse(queryParams);
  console.log(parsed.code);

  const authCode = parsed.code;

  const handleClick = () => {
    let requestOption = {
      //메뉴얼 대로
      url: "/oauth/2.0/token",
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
      },
      data: {
        code: authCode,
        client_id: "62109d93-03a5-48f0-a4c0-35a8ce12d207",
        client_secret: "8eaf95d7-c584-4723-85fb-68c37e54f858",
        redirect_uri: "http://localhost:3000/authResult",
        grant_type: "authorization_code",
      },
    };
    axios(requestOption).then(({ data }) => {
      setAccessToken(data.access_token);
      setUserSeqNo(data.user_seq_no);
      if (data.rsp_code !== "O0001") {
        localStorage.setItem("accessToken", data.access_token);
        localStorage.setItem("userSeqNo", data.user_seq_no);
        alert("저장 완료");
      } else {
        alert("인증에 실패했습니다 다시 시도해 주세요");
      }
    });
  };

  return (
    <div>
      <AppHeader title={"인증결과 / 토큰생성"} />
      <p>코드 : {authCode}</p>
      <button onClick={handleClick}>accessToken 요청</button>
      <p>accessToken : {accessToken}</p>
      <p>userSeqNo : {userSeqNo}</p>
    </div>
  );
};

export default AuthResultPage;
