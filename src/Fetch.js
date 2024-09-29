import { useEffect } from "react";
import { useState } from "react";
import Animation from "./Animation.json"
import Lottie from "lottie-react";
import "./App.css"

 function Fetch() {
  const [user, setUser] = useState([]);

  const fetchdata = () => {
    fetch("https://randomuser.me/api/?results=1")
    //gets a repsonse in json format
    .then(Response => Response.json())
    //updates state variable with json data
    .then(data => setUser(data))
  }

  useEffect(() => {
    // caliing the fecth data function
    fetchdata();
  }, [])

  return Object.keys(user).length > 0 ? (
    // if array is greater than zero it returns true
    <div>
      <h1>Data returned</h1>
      <h2>title: {user.results[0].name.title}</h2>
      <h2> first name: {user.results[0].name.first}</h2>
      <h2> last name: {user.results[0].name.last}</h2>
      <h2> age: {user.results[0].dob.age}</h2>
      <h2>Cell: {user.results[0].phone}</h2>
      <h2> City: {user.results[0].location.city}</h2>
      <img src={user.results[0].picture.large} alt=""></img>
    </div>) : 

    //returns data pending if less than zero
    (<div>
      <h1> Data pending...</h1>
        <Lottie animationData={Animation}/>
    </div>)
}
 export default Fetch;