import { useState } from "react";

function Rating() {
    const [score, setScore] = useState("10")
    const [comment, setComment] = useState("")
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if(Number(score) <= 5 && comment.length <= 10){
        alert("please provide a comment explaining why the experience was poor.")
        return;
      }
  
      console.log(score)
      console.log(comment)
      console.log("Form submitted!")
      setComment("")
      setScore("10")
    }
  
    return (
      <div className="App">
        <form onSubmit={handleSubmit}>
          <fieldset>
            <h2>Feedback Form</h2>
            <div className="Field">
              <label>Score: {score} ⭐️</label>
              <input 
              type="range" 
              min="0" 
              max="10" 
              value={score} 
              onChange={e => setScore(e.target.value)}/>
            </div>
            <div className="Field">
            <label>Comment:</label>
            <textarea value={comment} onChange={e => setComment(e.target.value)}/>
            </div>
            <button type="submit">submit</button>
          </fieldset>
        </form>
        
      </div>
    );
  }
  
  export default Rating;