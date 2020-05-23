import axios from "axios";

const getData = async (table) => {
  const result = await axios.get(
    `https://wjonke-portfolio.herokuapp.com/api/${table}`
  );

  // console.log("this is the result of getData --->", result);
  return result;
};
export default getData;
