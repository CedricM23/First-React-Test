import { useReducer } from "react";

//controls complex state

const reducer =(state, action) => {
    if (action.type === 'buy_ingredients') return {money: state.money - 10};
    if (action.type === `sell_a_meal`) return {money: state.money + 10 };
    if (action.type === `celebrity_visit`) return {money: state.money + 5000}
    return state;
  }
  function Reducer() {
    const initialstate = {money: 100};
    const [state, dispatch] = useReducer (reducer, initialstate);


  return(
    <div>
      <h1>wallet: {state.money} </h1>
      <div>
        <button onClick={() => dispatch({type: `buy_ingredients`})}>Shopping for veggies</button>
        <button onClick={() => dispatch({type: `sell_a_meal`})}>Serve a meal to the customer</button>
        <button onClick={() => dispatch({type: `celebrity_visit`})}> celebrtiy visit</button>
      </div>
    </div>
  )
 }
 export default Reducer;