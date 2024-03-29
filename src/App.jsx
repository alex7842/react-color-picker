 import New from "./New";
 import "./index.css";
function App(props){

  return(
    <>
    <h2>Color Picker</h2>
    <p className="para">Choose Your Favourite {props.name}</p>
    <br></br>
   
    <New/>

   
    </>
  );

}

export default App;