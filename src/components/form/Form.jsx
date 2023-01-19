import React from "react";

const Form = ({submit, id, input, setInput, setChangeInput}) => {

  const change = (e) => {
    setInput((p) => ({...p, [e.target.name] : e.target.value, id: id ? id : new Date(),}))
  }

  return <>
    <form className={id ? "Card-form" : "form"} onSubmit={submit}>
      {id ? "" : <h1 className="title">ToDo List</h1>}
      <input required autoComplete="off" onChange={change} value={input.name} type="text" placeholder="Enter your Name" name="name"/>
      <input required autoComplete="off" onChange={change} value={input.age} type="email" placeholder="Enter your Email" name="age"/>
      <input required autoComplete="off" onChange={change} value={input.phone} type="tel" placeholder="Enter your Tel" name="phone" />
      <button type="submit">{id ? "Save" : "Submit"} </button>
      {id ? <button type="button" onClick={() => {setChangeInput(false)}}>Cancel</button> : "" }
    </form>  
  </>
}

export default Form;