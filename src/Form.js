import { useState } from "react";
import './App.css'

function Form(){
    const [name, setName] = useState("")

    const handleSubmit= (e) =>{
    e.preventDefault();
    setName("")
    console.log("Form submitted")
    console.log(name)
  }

  return (
    <div fieldset="App">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <div className= "Field">
            <label htmlFor="name">Name:</label>
            <input
            id = "name" 
            type ="text" 
            placeholder="name" name="name" 
            value={name} 
            onChange={e => setName(e.target.value)} />
          </div>
          <button disabled={!name} type="submit">Submit</button>
        </fieldset>
      </form>
    </div>
    );

}

export default Form;