import axios from "axios";
const AxiosComponent = () => {
  const handleClick = () => {
    console.log("1");
    axios.get("https://jsonplaceholder.typicode.com/todos/1").then((res) => {
      console.log(res);
    });
    console.log("end");
  };

  return (
    <div>
      <button onClick={handleClick}>send Request</button>
    </div>
  );
};

export default AxiosComponent;
