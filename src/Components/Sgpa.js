import React, { useEffect, useState } from "react";
import SgpaComponent from "./SgpaComponent";
import './Sgpa.css'
import {MdPlaylistAdd} from "react-icons/md"

function Sgpa() {
  const [visible, setVisible] = React.useState(false);
  const [subjects, setSubjects] = useState(["Subject Name"]);
  const [grades, setGrades] = useState(["O"]);
  const [points, setPoints] = useState([10]);
  const [credits, setCredits] = useState([1]);
  const [sgpa, setSgpa] = useState();
  function handleAdd() {
    setSubjects((prev) => [...prev, "Subject Name"]);
    setGrades((prev) => [...prev, "A+"]);
    setPoints((prev) => [...prev, 10]);
    setCredits((prev) => [...prev, 0]);
  }
  useEffect(() => {
    // handlePoints();
    calcSgpa();
  });
 
  function calcSgpa() {
    let totalCredits = 0;
    let totalPoints = 0;
    
    for (let i = 0; i < credits.length; i++) {
      if ((credits[i] !=='none') || (points[i]!=='none') ){
        totalCredits = totalCredits + parseInt(credits[i]);
      }
      
    }
    
  
    for (let i = 0; i < points.length; i++) {
      if ((credits[i] !=='none') || (points[i]!=='none') ){
        totalPoints += (points[i] * credits[i]); 
        console.log(totalPoints);
      }
     
    }
   
   
    
    

    setSgpa((totalPoints / totalCredits).toFixed(2));
    totalPoints=0;
    totalCredits=0;
  }

  function handleGrade(event, i) {
    let newGrades = [...grades];
    newGrades[i] = event.target.value;
    handlePoints(newGrades[i],i);
    setGrades(newGrades);
   
   
  }

  function handleDelete(valueIndex){
    
    setPoints(points.filter((point, index) => valueIndex !== index)); 
    setCredits(credits.filter((credit, index) => valueIndex !== index));
    setGrades(grades.filter((grade, index) => valueIndex !== index));
    setSubjects(subjects.filter((subject, index) => valueIndex !== index));  
    

  }


  function handleCredits(event, i) {
    let newCredits = [...credits];
    newCredits[i] = event.target.value;
    setCredits(newCredits);
  
  }

  function handlePoints(grades,i){
    if (grades === "O" || grades === "A") {
      const newPoints = [...points];
      newPoints[i] = 10;
      setPoints(newPoints);
    }
    if (grades === "A+") {
      let newPoints = [...points];
      newPoints[i] =9;
      setPoints(newPoints);
    }
    if (grades === "A") {
      let newPoints = [...points];
      newPoints[i] = 8;
      setPoints(newPoints);
    }

    if (grades === "B+") {
      let newPoints = [...points];
      newPoints[i] = 7;
      setPoints(newPoints);
    }
    if (grades === "B") {
      let newPoints = [...points];
      newPoints[i] = 6;
      setPoints(newPoints);
    }
    if (grades === "C") {
      let newPoints = [...points];
      newPoints[i] = 5;
      setPoints(newPoints);
    }
    if (grades === "F") {
      let newPoints = [...points];
      newPoints[i] = 0;
      setPoints(newPoints);
    }
    if (grades === "ab") {
      let newPoints = [...points];
      newPoints[i] =0;
      setPoints(newPoints);
    }
    if (grades === "I") {
      let newPoints = [...points];
      newPoints[i] = 0;
      setPoints(newPoints);
    }
    if (grades === "D") {
      let newPoints = [...points];
      newPoints[i] = 1.0;
      setPoints(newPoints);
    }
    if (grades === "F") {
      let newPoints = [...points];
      newPoints[i] = 0;
      setPoints(newPoints);
    }
    console.log(points)
  }
  return (
    <div className="sgpahead">
      <div className="calc">
      <button onClick={() => setVisible(!visible)}>{visible ? 'Reset' : 'Calculate'}</button>
      {visible && <div><div className='sgpa'>Your GPA :{sgpa}</div></div>}
    </div>
      {subjects.map((subject, i) => {
        return (
          <>
          <SgpaComponent
            
            handleDelete={handleDelete}
            subject={subject}
            grade={grades[i]}
            credit={credits[i]}
            point={points[i]}
            index={i}
            handleGrade={handleGrade}
            handleCredits={handleCredits}
          />
          </>
        );
      })}
      <button className='addtab' onClick={handleAdd}> <MdPlaylistAdd  size={25}/> </button>
    </div>
  );
}

export default Sgpa;
