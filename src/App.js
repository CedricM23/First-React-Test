import Fetch from "./Fetch";
import { useState} from "react";
import { useReducer } from "react";


function refreshPage(){ 
  window.location.reload(); 
}


function App (){
  const [, forceUpdate] = useReducer(x => x + 1, 0)
  return(
<div>
 <Fetch />
 
 <button type="button" onClick={ refreshPage }> <span>Reload</span> </button> 
</div>
  )
 }
 export default App;