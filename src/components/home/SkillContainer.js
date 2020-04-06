import React from "react";
import SkillCard from "./SkillCard";
import Spinner from "../../utility/Spinner";

const SkillContainer = () => {
  return (
    <div className="center">
      <Spinner />
    </div>
  );

  // if (Skills) {
  //   return (
  //     <div className="center">
  //       <Skills />
  //     </div>
  //   );
  // } else {
  //   return (
  //     <div className="center">
  //       <Spinner />
  //     </div>
  //   );
  // }
};

export default SkillContainer;

// export default function Skills(props){
//   return (
//       <div className="skills-list">
//           <h1>Skills</h1>
//           <div className="skills">

//           {props.skills.map(skill=>{
//               return <SkillBlock skill={skill} key={skill._id}/>

//           })}

//           </div>

//       </div>
//   )
// }
