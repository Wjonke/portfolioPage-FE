import React, { useState } from "react";
import Spinner from "../utility/Spinner";

export const GetOverview = async () => {
  const [overview, setOverview] = useState([]);
  const [loading, setLoading] = useState(false);

  setLoading(true);

  const res = await fetch("http://localhost:5000/overview");
  const data = await res.json();
  console.log("this is the text from DB --->", data.message);
  setOverview(data.message);
  setLoading(false);

  console.log(overview);

  if (loading) {
    return <Spinner />;
  } else return overview;
};

// export const GetProjects = async () => {
//   const [loading, setLoading] = useState(false);
//   const [projects, setProjects] = useState([]);

//   setLoading(true);
//   const res = await axios.get("/overview");
//   setLoading(false);
//   return res;
// };

// export const GetSkills = () => {
//   const [loading, setLoading] = useState(false);
//   const [skills, setSkills] = useState([]);

//   return <div></div>;
// };
