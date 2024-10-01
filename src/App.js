import Fetch from "./Fetch";
import DessertsList from "./DessertsList";


function refreshPage(){ 
  window.location.reload(); 
}


function App (){
  return(
<div>
 <Fetch />
 <button type="button" onClick={ refreshPage }> <span>Reload Page</span> </button> 
</div>
  )
 }
 export default App;