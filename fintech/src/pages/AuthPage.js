import AppHeader from "../components/common/AppHeader";

const AuthPage = () => {
  const handleClick = () => {
    let tmpwindow = window.open("about:blank");
    let clientId = "62109d93-03a5-48f0-a4c0-35a8ce12d207";
    tmpwindow.location.href = `https://testapi.openbanking.or.kr/oauth/2.0/authorize?response_type=code&client_id=${clientId}&redirect_uri=http://localhost:3000/authResult&scope=login inquiry transfer&state=12312312312312312312312312312311&auth_type=0`;
  };
  return (
    <div>
      <AppHeader title={"인증시작"} />
      <button onClick={handleClick}>인증하기</button>
    </div>
  );
};

export default AuthPage;
