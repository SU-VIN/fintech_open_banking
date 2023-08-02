const Welcome = ({ userName, age }) => {
  return (
    <div>
      <p>
        안녕하세요 {userName}님 나이는 {age}
      </p>
    </div>
  );
};

export default Welcome;
