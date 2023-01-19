import React from "react";
import Card from "./components/card/Card";
import Form from "./components/form/Form";

const App = () => {

  const [input, setInput] = React.useState({name:"", age:"", phone:""})
  const [data, setData] = React.useState([]);

  const submit = (e) => {
    e.preventDefault(); 
    setInput({name:"", age:"", phone:""})
    setData((p) => ([...p, input]));
  }

  const editData = (item) => {
    setData((p) => p.map((el) => el.id === item.id ? item : el))
  }

  const deleteItem = (id) => {
    setData((p) => p.filter((el) => el.id !== id))
  }

  return <>
    <div className="block">
      <div className="hero-form">
        <Form input={input} setInput={setInput} submit={submit} />
      </div>
      <div className="items-area">
        {
          data.map((el) => {
            return <Card key={el.id} deleteItem={deleteItem} editData={editData} {...el}/>
          })
        }
      </div>

    </div>
   
  </>
}

export default App;


