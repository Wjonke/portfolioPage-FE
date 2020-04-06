import axios from "axios";

const getData = async (type) => {
  const result = await axios.get(`http://localhost:5000/${type}`);

  // console.log("this is the result of getData --->", result);
  return result;
};
export default getData;
