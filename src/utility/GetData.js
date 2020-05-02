import axios from "axios";

const getData = async (table) => {
  const result = await axios.get(`http://localhost:5032/api/${table}`);

  // console.log("this is the result of getData --->", result);
  return result;
};
export default getData;
