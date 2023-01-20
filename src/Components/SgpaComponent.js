import React from "react";
import "./SgpaComponent.css";
import { BsFillTrashFill } from "react-icons/bs";


function SgpaComponent(props) {
  return (
    <div className='sgpacomponent'>
      <input
        type="text"
        id="name"
        name="subjectName"
        placeholder={props.subject}
        className='inputsubject'
      />

      <select
        className='credits'
        onChange={(event) => props.handleCredits(event, props.index)}
        credits={props.credit}
      >
        <option credits="1">1</option>
        <option credits="2">2</option>
        <option credits="3">3</option>
        <option credits="4">4</option>
        <option credits="5">5</option>
      </select>
      
      <select
         className='grades'
        onChange={(event) => props.handleGrade(event, props.index)}
        grade={props.grade}
      > 
        <option grade="A+">A+</option>
        <option grade="A">O</option>
        <option grade="A-">A</option>
        <option grade="B+">B+</option>
        <option grade="B">B</option>
        <option grade="B-">B-</option>
        <option grade="C+">C</option>
        <option grade="F">F</option>
        <option grade="F">ab</option>
        <option grade="F">I</option>
      </select>
      <button className="deletebtn" onClick={ () => props.handleDelete(props.index) }><BsFillTrashFill  size={18} /></button>
      
    </div>
  );
}

export default SgpaComponent;
