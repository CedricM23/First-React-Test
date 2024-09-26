function UseRef (){
    const formInputRef = React.useRef(null);
    const focusInput = () => {
      formInputRef.current.focus();
    }
    return(
      <div>
        <h1> using useRef to access the underlying DOM</h1>
        <input ref={formInputRef} type="text" />
        <button onClick={focusInput}>Focus Input</button>
      </div>
    )
   }
   export default UseRef;