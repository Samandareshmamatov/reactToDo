import React from "react";
import Form from "../form/Form";

const Card = ({name, age, phone, id, editData, deleteItem}) => {

  const [input, setInput] = React.useState({name, age, phone});
  const [changeInput, setChangeInput] = React.useState(false);

  const submit = (e) => {
    e.preventDefault();
    editData(input)
    setChangeInput(false)
  }

  return <>
    {!changeInput 
      ?
      <div className="box" id={id}>
        <p>Name : {input.name}</p>
        <p>Age : {input.age}</p>  
        <p>Phone : {input.phone}</p>
        <button type="button" onClick={() => {setChangeInput(true)}}>Edit</button>
        <button type="button" onClick={() => deleteItem(id)}>Delete</button>
      </div>
      :
      <Form input={input} setInput={setInput} submit={submit} id={id} setChangeInput={setChangeInput}/>

    }

  </>
}

export default Card;